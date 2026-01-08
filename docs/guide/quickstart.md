# Quick Start

Get CloudSync running in under 5 minutes with this quick start guide.

## Install

::: code-group

```bash [npm]
npm install -g @cloudsync/cli
```

```bash [yarn]
yarn global add @cloudsync/cli
```

```bash [pnpm]
pnpm add -g @cloudsync/cli
```

:::

## Login

```bash
cloudsync login
```

This opens your browser to authenticate with CloudSync.

## Create a Workspace

```bash
cloudsync init my-project
cd my-project
```

## Start Syncing

```bash
cloudsync sync
```

That's it! Your files are now syncing to the cloud.

## SDK Quick Start

For programmatic access, install our SDK:

```bash
npm install @cloudsync/sdk
```

```typescript
import { CloudSync } from '@cloudsync/sdk'

const client = new CloudSync({
  apiKey: process.env.CLOUDSYNC_API_KEY
})

// Upload a file
await client.files.upload({
  workspace: 'my-project',
  path: '/documents/report.pdf',
  file: fileBuffer
})

// List files
const files = await client.files.list({
  workspace: 'my-project',
  path: '/documents'
})

console.log(files)
```

## What's Next?

- [Full Getting Started Guide](/guide/getting-started)
- [API Reference](/api/)
- [Webhook Integration](/guide/webhooks)
