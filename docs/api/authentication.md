# Authentication

The CloudSync API supports two authentication methods: API keys and OAuth 2.0.

## API Keys

API keys are the simplest way to authenticate with the CloudSync API.

### Creating an API Key

1. Go to **Account Settings > API Keys**
2. Click **Create API Key**
3. Give your key a name
4. Select permissions
5. Copy and securely store your key

::: danger Keep Your Keys Secret
API keys grant access to your CloudSync account. Never share them or commit them to version control.
:::

### Using API Keys

Include your API key in the `Authorization` header:

```bash
curl https://api.cloudsync.io/v1/workspaces \
  -H "Authorization: Bearer sk_live_abc123..."
```

### Key Types

| Prefix | Environment | Use Case |
|--------|-------------|----------|
| `sk_live_` | Production | Live applications |
| `sk_test_` | Sandbox | Testing and development |

### Key Permissions

| Permission | Description |
|------------|-------------|
| `files:read` | Read file contents |
| `files:write` | Create and modify files |
| `workspaces:read` | List and view workspaces |
| `workspaces:write` | Create and manage workspaces |
| `users:read` | View workspace members |
| `users:write` | Manage workspace members |

## OAuth 2.0

For applications that need to access CloudSync on behalf of users, use OAuth 2.0.

### Authorization Flow

1. **Redirect to Authorization URL**

```
https://auth.cloudsync.io/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=https://your-app.com/callback&
  response_type=code&
  scope=files:read+files:write&
  state=random_state_string
```

2. **Exchange Code for Token**

```bash
curl https://auth.cloudsync.io/oauth/token \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "authorization_code",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "code": "AUTH_CODE",
    "redirect_uri": "https://your-app.com/callback"
  }'
```

Response:

```json
{
  "access_token": "at_live_abc123...",
  "refresh_token": "rt_live_xyz789...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "files:read files:write"
}
```

3. **Use Access Token**

```bash
curl https://api.cloudsync.io/v1/me \
  -H "Authorization: Bearer at_live_abc123..."
```

### Refreshing Tokens

Access tokens expire after 1 hour. Use the refresh token to get a new access token:

```bash
curl https://auth.cloudsync.io/oauth/token \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "refresh_token",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "refresh_token": "rt_live_xyz789..."
  }'
```

### Scopes

| Scope | Description |
|-------|-------------|
| `files:read` | Read file contents |
| `files:write` | Create and modify files |
| `workspaces:read` | List and view workspaces |
| `workspaces:write` | Create and manage workspaces |
| `offline_access` | Get refresh tokens |

## SDK Authentication

### JavaScript/TypeScript

```typescript
import { CloudSync } from '@cloudsync/sdk'

// API Key
const client = new CloudSync({
  apiKey: process.env.CLOUDSYNC_API_KEY
})

// OAuth
const client = new CloudSync({
  accessToken: userAccessToken
})
```

### Python

```python
from cloudsync import CloudSync

# API Key
client = CloudSync(api_key=os.environ['CLOUDSYNC_API_KEY'])

# OAuth
client = CloudSync(access_token=user_access_token)
```

## Security Best Practices

::: tip Authentication Tips
- Use environment variables for API keys
- Implement key rotation every 90 days
- Use the minimum required scopes
- Monitor API key usage in the dashboard
- Use OAuth for user-facing applications
:::
