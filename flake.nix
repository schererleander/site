{
  description = "Flake for site deployment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };

        site = pkgs.buildNpmPackage {
          pname = "site";
          version = "0.1.0";
          src = ./.;

          npmDepsHash = "sha256-jOhhPNoIFaxnUJhFtB7ei3YBwtBkZ9m4U/wuB82McLk=";

          nodejs = pkgs.nodejs;

          buildPhase = ''
            runHook preBuild
            npm run build
            runHook postBuild
          '';

          installPhase = ''
            runHook preInstall
            mkdir -p $out/share/web
            cp -r dist/* $out/share/web/
            runHook postInstall
          '';
        };
      in
      {
        packages.default = site;
      }
    )
    // {
      nixosModules.default =
        { lib, config, ... }:
        let
          cfg = config.services.site;
          inherit (lib)
            mkIf
            mkEnableOption
            mkOption
            types
            ;
        in
        {
          options.services.site = {
            enable = mkEnableOption "Serve the built Vite site via nginx";

            domain = mkOption {
              type = types.str;
              description = "Domain to serve.";
            };

            package = mkOption {
              type = types.package;
              description = "Package whose /share/web contains the built site.";
              default = self.packages.${config.nixpkgs.hostPlatform.system}.default;
            };

            sslCertificate = mkOption {
              type = types.nullOr types.path;
              default = null;
              description = "Path to TLS certificate (PEM).";
            };
            sslCertificateKey = mkOption {
              type = types.nullOr types.path;
              default = null;
              description = "Path to TLS private key (PEM).";
            };
          };

          assertions = [
            {
              assertion = (cfg.sslCertificate == null) == (cfg.sslCertificateKey == null);
              message = "services.site: sslCertificate and sslCertificateKey must be set together.";
            }
          ];

          config = mkIf cfg.enable {
            services.nginx.enable = true;

            services.nginx.virtualHosts.${cfg.domain} =
              let
                useTLS = (cfg.sslCertificate != null) && (cfg.sslCertificateKey != null);
              in
              {
                root = "${cfg.package}/share/web";

                locations."/" = {
                  tryFiles = "$uri $uri/ /index.html";
                };

                forceSSL = useTLS;
                sslCertificate = mkIf useTLS cfg.sslCertificate;
                sslCertificateKey = mkIf useTLS cfg.sslCertificateKey;
              };
          };
        };
    };
}
