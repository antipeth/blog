# build site
@build:
  zola build

@update:
  # Let flake update
  nix flake update --extra-experimental-features flakes --extra-experimental-features nix-command --show-trace
