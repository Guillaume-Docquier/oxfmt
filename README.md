# @guillaume-docquier/oxfmt

Shared Oxfmt configuration for my TypeScript projects.

## Install

```sh
pnpm add --save-dev @guillaume-docquier/oxfmt oxfmt
```

## Use

Re-export the shared config from `oxfmt.config.ts`:

```ts
export { default } from "@guillaume-docquier/oxfmt"
```

To customize it for one project, spread the shared config and override the relevant options:

```ts
import sharedConfig from "@guillaume-docquier/oxfmt"
import { defineConfig } from "oxfmt"

export default defineConfig({
  ...sharedConfig,
  printWidth: 100,
})
```
