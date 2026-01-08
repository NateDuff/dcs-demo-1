# Webhooks

Integrate CloudSync with your workflow using webhooks. Get notified when files change, users join, or other events occur.

## Setting Up Webhooks

### Via Dashboard

1. Go to **Workspace Settings > Webhooks**
2. Click **Add Webhook**
3. Enter your endpoint URL
4. Select events to subscribe to
5. Click **Create**

### Via API

```typescript
const webhook = await client.webhooks.create({
  workspace: 'my-project',
  url: 'https://your-app.com/webhooks/cloudsync',
  events: ['file.created', 'file.modified', 'file.deleted'],
  secret: 'whsec_your_secret_key'
})
```

## Event Types

| Event | Trigger |
|-------|---------|
| `file.created` | New file uploaded |
| `file.modified` | File contents changed |
| `file.deleted` | File removed |
| `file.moved` | File renamed/moved |
| `workspace.member_added` | New member joined |
| `workspace.member_removed` | Member left/removed |
| `sync.completed` | Sync operation finished |
| `sync.error` | Sync error occurred |

## Webhook Payload

All webhooks include a standard payload structure:

```json
{
  "id": "evt_abc123",
  "type": "file.modified",
  "timestamp": "2026-01-06T10:30:00Z",
  "workspace": {
    "id": "ws_xyz789",
    "name": "My Project"
  },
  "data": {
    "path": "/documents/report.pdf",
    "size": 1048576,
    "modifiedBy": "user@example.com",
    "version": 42
  }
}
```

## Verifying Webhooks

All webhooks are signed with HMAC-SHA256. Verify the signature to ensure authenticity:

```typescript
import crypto from 'crypto'

function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(`sha256=${expected}`)
  )
}

// In your webhook handler
app.post('/webhooks/cloudsync', (req, res) => {
  const signature = req.headers['x-cloudsync-signature']
  const payload = JSON.stringify(req.body)
  
  if (!verifyWebhook(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature')
  }
  
  // Process the webhook
  handleWebhook(req.body)
  res.status(200).send('OK')
})
```

## Retry Policy

Failed webhooks are retried with exponential backoff:

| Attempt | Delay |
|---------|-------|
| 1 | Immediate |
| 2 | 1 minute |
| 3 | 5 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |

After 5 failed attempts, the webhook is disabled and you'll receive an email notification.

## Testing Webhooks

Use the CLI to send test events:

```bash
cloudsync webhooks test --workspace my-project --event file.created
```

Or trigger a test from the dashboard under **Workspace Settings > Webhooks > Test**.

## Best Practices

::: tip Webhook Tips
- Always verify webhook signatures
- Respond quickly (within 5 seconds) to avoid timeouts
- Use a queue for time-consuming processing
- Log webhook payloads for debugging
- Monitor webhook delivery in the dashboard
:::
