import type { OxfmtConfig } from "oxfmt"

const config: OxfmtConfig = {
  printWidth: 140,
  semi: false,
  sortPackageJson: {
    sortScripts: true,
  },
  sortImports: {
    newlinesBetween: false,
  },
  ignorePatterns: ["pnpm-lock.yaml", "dist", ".pnpm-store", "*.gen.*"],
}

export default config
