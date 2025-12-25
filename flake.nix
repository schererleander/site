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

          npmDepsHash = "sha256-kq1Bsv20i+XcKEcogfmVvCJy/SjSN2trw2df89qs0No="

          buildPhase = ''
            runHook preBuild
            npm run build
            runHook postBuild
          '';

          installPhase = ''
            runHook preInstall
            
            mkdir -p $out/share/web
            
            cp -r .next/standalone/* $out/share/web/
            
            mkdir -p $out/share/web/.next
            cp -r .next/static $out/share/web/.next/
            cp -r public $out/share/web/
            
            runHook postInstall
          '';
        };
      in
      {
        packages = {
          default = site;
        };
      }
    )
    // {
      nixosModules.default =
        {
          lib,
          config,
          pkgs,
          ...
        }:
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
            enable = mkEnableOption "Serve the built Next.js site using systemd";

            domain = mkOption {
              type = types.str;
              description = "Domain to serve.";
            };

            port = mkOption {
              type = types.port;
              default = 3000;
              description = "Port to expose on the host.";
            };

            package = mkOption {
              type = types.package;
              description = "The site package to run.";
              default = self.packages.${pkgs.system}.default;
            };
          };

          config = mkIf cfg.enable {
            systemd.services.site = {
              description = "Next.js site service";
              wantedBy = [ "multi-user.target" ];
              after = [ "network.target" ];

              serviceConfig = {
                ExecStart = "${pkgs.nodejs}/bin/node ${cfg.package}/share/web/server.js";
                WorkingDirectory = "${cfg.package}/share/web";
                User = "nextjs";
                Group = "nextjs";
                Restart = "always";
                
                # Hardening
                DynamicUser = true;
                PrivateTmp = true;
                ProtectSystem = "strict";
                ProtectHome = true;
                NoNewPrivileges = true;

                Environment = [
                  "NODE_ENV=production"
                  "PORT=${toString cfg.port}"
                  "HOSTNAME=127.0.0.1"
                ];
              };
            };

            services.nginx = {
              enable = true;
              virtualHosts.${cfg.domain} = {
                locations."/" = {
                  proxyPass = "http://127.0.0.1:${toString cfg.port}";
                  proxyWebsockets = true;
                };
              };
            };
          };
        };
    };
}
