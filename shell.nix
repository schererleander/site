{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    corepack_22
    nodePackages.typescript-language-server
    nodePackages.vscode-langservers-extracted
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
    echo "Development environment loaded."
    node --version
  	exec zsh
  '';
}
