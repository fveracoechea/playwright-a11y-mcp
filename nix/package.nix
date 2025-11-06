{mkBunDerivation, ...}:
mkBunDerivation {
  pname = "playwright-a11y-mcp";
  version = "1.0.0";
  src = ../.;
  bunNix = ./bun.nix;
  # index = "src/index.ts";
}
