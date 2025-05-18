+++
title = "Syntax Highlighting Test"
date = 2025-05-09
+++
# This is Syntax Highlighting Test
```rust
fn main() {
    println!("Hello, world!");
}
```
    
```nix
{
  description = "test nixos flake config";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs, ... }@inputs:
    let
      system = "x86_64-linux";
      host = "test";
    in
    {
      # test

      nixosConfigurations = {
        "${host}" = nixpkgs.lib.nixosSystem {
          specialArgs = {
            inherit system;
            inherit host;
          };
          modules = [
            ./hosts/${host}/config.nix
          ];
        };
      };
    };
}

```
