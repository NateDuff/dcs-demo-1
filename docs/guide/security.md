# Security

CloudSync takes security seriously. This guide covers our security features and best practices for keeping your data safe.

## Encryption

### Data in Transit

All data transferred between clients and CloudSync servers is encrypted using TLS 1.3.

### Data at Rest

Files stored in CloudSync are encrypted with AES-256. Each workspace has its own encryption key.

### End-to-End Encryption (E2EE)

For maximum security, enable E2EE for sensitive workspaces. With E2EE, files are encrypted on your device before upload, and only you and your team members can decrypt them.

```bash
cloudsync workspace create "Secret Project" --e2e-encryption
```

::: warning E2EE Limitations
With E2EE enabled:
- Server-side search is unavailable
- Preview thumbnails are not generated
- File recovery requires your encryption key
:::

## Authentication

### Single Sign-On (SSO)

CloudSync supports SSO with major identity providers:

- Google Workspace
- Microsoft Azure AD
- Okta
- OneLogin
- SAML 2.0 (custom)

### Multi-Factor Authentication (MFA)

Enable MFA for additional account security:

1. Go to **Account Settings > Security**
2. Click **Enable MFA**
3. Scan the QR code with your authenticator app
4. Enter the verification code

### API Keys

API keys provide programmatic access to CloudSync:

```typescript
const client = new CloudSync({
  apiKey: process.env.CLOUDSYNC_API_KEY
})
```

Best practices for API keys:
- Never commit API keys to version control
- Use environment variables
- Rotate keys regularly
- Create separate keys for different applications

## Access Control

### Role-Based Access Control (RBAC)

CloudSync uses RBAC for fine-grained permissions:

| Role | View | Edit | Delete | Manage Members | Admin |
|------|------|------|--------|----------------|-------|
| Viewer | ✅ | ❌ | ❌ | ❌ | ❌ |
| Editor | ✅ | ✅ | ✅ | ❌ | ❌ |
| Admin | ✅ | ✅ | ✅ | ✅ | ❌ |
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ |

### IP Allowlisting

Restrict access to specific IP addresses or ranges:

```typescript
await client.workspaces.updateSettings({
  workspace: 'my-project',
  ipAllowlist: ['192.168.1.0/24', '10.0.0.0/8']
})
```

## Audit Logs

Track all security-relevant events with audit logs:

```typescript
const logs = await client.audit.list({
  workspace: 'my-project',
  startDate: '2026-01-01',
  events: ['auth.login', 'file.access', 'settings.changed']
})
```

### Audited Events

- Login attempts (success/failure)
- File access
- Permission changes
- Settings modifications
- API key usage
- Share link creation

## Compliance

CloudSync is compliant with:

- **SOC 2 Type II** - Security, availability, and confidentiality
- **GDPR** - EU data protection regulations
- **HIPAA** - Healthcare data (Enterprise plan)
- **ISO 27001** - Information security management

## Incident Response

If you suspect a security incident:

1. Immediately revoke any compromised API keys
2. Enable MFA if not already enabled
3. Review audit logs for suspicious activity
4. Contact security@cloudsync.io

## Best Practices

::: tip Security Checklist
- [ ] Enable MFA for all team members
- [ ] Use SSO for centralized access management
- [ ] Rotate API keys quarterly
- [ ] Review audit logs weekly
- [ ] Enable E2EE for sensitive workspaces
- [ ] Set up IP allowlisting for production environments
:::
