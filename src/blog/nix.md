---
title: "Nix"
date: "2025-06-25"
excerpt: "A deep dive into my fully declarative system setup using Nix, from desktop to VPS."
cover: "/images/nixsnowflake.webp"
---

# My Nix Setup: Why I Switched Everything

I've used Linux for years, mostly in dual boot with Windows. But a few months ago, I switched completely to [NixOS](https://nixos.org/), and honestly, I love it. The idea of configuring everything on my system **declaratively**—just by writing code—is what really got me hooked.

## Sway with Nix

I use [Sway](https://github.com/swaywm/sway) as my window manager, and setting it up with Nix has been super easy. Instead of messing with dotfiles or installing things manually, I just describe what I want in a config file and let Nix handle it.

## Neovim + NVF

One of my favorite changes has been switching my Neovim setup to use [NVF](https://github.com/NotAShelf/nvf). It makes managing plugins and settings way easier.

Here's a peek at my `nvf.nix` config:

```nix
{ config, lib, pkgs, ... }:

{
    programs.nvf = {
      enable = true;
      settings = {
        vim = {
          theme.enable = true;
          theme.name = "gruvbox";

          options = {
            clipboard = "unnamedplus";
            tabstop = 2;
            shiftwidth = 2;
            expandtab = true;
            autoindent = true;
            mouse = "a";
          };

          telescope.enable = true;
          autocomplete.nvim-cmp.enable = true;

          autopairs.nvim-autopairs.enable = true;

          git.enable = true;

          lsp = {
            enable = true;
            formatOnSave = true;
            lspkind.enable = true;
            lspSignature.enable = true;
          };

          languages = {
            enableTreesitter = true;
            
            nix.enable = true;
            markdown.enable  = true;

            clang.enable = true;
            css.enable = true;
            html.enable = true;
            java.enable = true;
            ts.enable = true;
            go.enable = true;
            lua.enable = true;
            python.enable = true;
            typst.enable = true;
          };

          formatter.conform-nvim.enable = true;

          visuals = {
            nvim-web-devicons.enable = true;
          };

          snippets.luasnip.enable = true;

          binds = {
            whichKey.enable = true;
            cheatsheet.enable = true;
          };

          statusline.lualine.enable = true;
        };
      };
    };
  };
}
```

You can check out my full Nix configuration [here on GitHub](https://github.com/schererleander/nix).

## Firefox, Configured by Code

I even manage **Firefox** through Nix! From settings to extensions, everything is set up declaratively. It’s cool to see a browser this customizable through config files.

## Using nix-darwin on macOS

I’ve got a **MacBook Air**, and I’m using [nix-darwin](https://github.com/LnL7/nix-darwin) on it. It’s not quite as deep as NixOS, but I can still manage most of my tools and configs declaratively. Works great for development stuff.

## VPS with nix-infect

My VPS is running Nix too. I used [nix-infect](https://github.com/elitak/nix-infect) to get started, and now I manage things like **[nginx](https://nginx.org/)** and **[Nextcloud](https://nextcloud.com/)** with Nix. It’s super easy to maintain and back up.
