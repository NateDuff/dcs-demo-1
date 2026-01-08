# Frequently Asked Questions

Common questions about CloudSync.

## General

### What is CloudSync?

CloudSync is a modern cloud synchronization platform designed for teams. It provides real-time file sync, collaboration features, and powerful APIs for integrating with your workflow.

### How is CloudSync different from Dropbox or Google Drive?

CloudSync is built for developers and teams who need:
- Real-time sync (milliseconds, not minutes)
- Powerful REST API and SDKs
- Self-hosted option for enterprises
- Git-like version control for all files
- End-to-end encryption option

### Is there a free plan?

Yes! Our free plan includes:
- 5 GB storage
- 3 workspaces
- Real-time sync
- 100 API requests/minute
- Community support

## Technical

### How fast is the sync?

Changes typically sync in under 100ms between connected clients. Our sync engine uses WebSocket connections for instant updates, plus delta sync to minimize bandwidth.

### Does CloudSync work offline?

Yes. The desktop and mobile clients cache files locally and queue changes when offline. Changes sync automatically when you reconnect.

### What file types are supported?

CloudSync supports all file types. For certain formats (PDF, images, Office docs), we provide:
- Preview thumbnails
- Full-text search indexing
- Version comparison

### How secure is my data?

We take security seriously:
- All data encrypted in transit (TLS 1.3)
- All data encrypted at rest (AES-256)
- Optional end-to-end encryption
- SOC 2 Type II certified
- GDPR compliant

See our [Security page](/guide/security) for details.

## Pricing & Plans

### What's included in the Pro plan?

Pro ($10/user/month) includes:
- 100 GB storage per user
- Unlimited workspaces
- 1,000 API requests/minute
- Priority support
- SSO integration
- Advanced analytics

### Do you offer annual billing?

Yes, annual billing saves 20% compared to monthly.

### Is there a self-hosted option?

Yes, our Enterprise plan includes a self-hosted option for organizations that need to keep data on-premises. Contact sales for details.

## Support

### How do I get help?

- **Documentation** - You're reading it!
- **Community** - [Discord server](https://discord.gg/cloudsync)
- **Email** - support@cloudsync.io (Pro+)
- **Priority** - Dedicated Slack channel (Enterprise)

### How do I report a bug?

1. Check if it's a known issue in our [status page](https://status.cloudsync.io)
2. Search our [GitHub issues](https://github.com/cloudsync/cloudsync/issues)
3. If new, create an issue with reproduction steps

### Can I request a feature?

Absolutely! Submit feature requests on our [feedback board](https://feedback.cloudsync.io). We review and prioritize based on demand.

## Migration

### How do I migrate from Dropbox/Google Drive?

We have migration tools for:
- Dropbox
- Google Drive
- OneDrive
- Box

See our [migration guides](https://cloudsync.io/docs/migration) for step-by-step instructions.

### Can I export my data?

Yes, you can export all your data at any time:

```bash
cloudsync export --workspace my-project --output ./backup
```

This creates a local copy of all files with version history and metadata.
