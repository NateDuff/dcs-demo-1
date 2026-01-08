# Real-time Sync

CloudSync's real-time sync engine ensures your files are always up-to-date across all devices, with changes propagating in milliseconds.

## How It Works

Our sync engine uses a combination of technologies to achieve near-instant synchronization:

1. **WebSocket Connections** - Persistent connections for instant updates
2. **Delta Sync** - Only changed bytes are transferred
3. **Content-Addressable Storage** - Deduplication at the block level
4. **Operational Transformation** - Conflict-free collaborative editing

## Sync Modes

### Real-time Mode (Default)

Files sync instantly as changes are detected. Best for:
- Active collaboration
- Small to medium files
- Documents and code

### Scheduled Mode

Files sync at configured intervals. Best for:
- Large files
- Bandwidth-limited connections
- Backup scenarios

### Manual Mode

Files only sync when explicitly triggered. Best for:
- Sensitive operations
- Testing and development

## Configuration

### CLI Configuration

```bash
# Set sync mode
cloudsync config set sync.mode realtime

# Set conflict resolution
cloudsync config set sync.conflicts auto-merge
```

### SDK Configuration

```typescript
const client = new CloudSync({
  apiKey: process.env.CLOUDSYNC_API_KEY,
  sync: {
    mode: 'realtime',
    conflictResolution: 'auto-merge',
    deltaSync: true
  }
})
```

## Monitoring Sync Status

### Status Command

```bash
cloudsync status
```

Output:
```
Workspace: My Project
Status: Syncing
Progress: 42/50 files
Speed: 2.3 MB/s
Last sync: 3 seconds ago
```

### Sync Events

Subscribe to sync events in your application:

```typescript
client.on('sync:start', (event) => {
  console.log(`Syncing ${event.files.length} files`)
})

client.on('sync:complete', (event) => {
  console.log(`Sync complete in ${event.duration}ms`)
})

client.on('sync:error', (error) => {
  console.error('Sync failed:', error.message)
})
```

## Troubleshooting

### Common Issues

::: details Files not syncing
1. Check your internet connection
2. Verify you're signed in: `cloudsync whoami`
3. Check sync status: `cloudsync status`
4. Review logs: `cloudsync logs`
:::

::: details Slow sync speeds
1. Check network bandwidth
2. Try switching to delta sync mode
3. Exclude large binary files with filters
4. Contact support for large-scale deployments
:::

## Related Topics

- [Webhooks](/guide/webhooks)
- [API Reference](/api/)
