# Users API

Manage user accounts and profiles.

## Get Current User

Get the authenticated user's profile.

```http
GET /v1/me
```

### Example

```bash
curl "https://api.cloudsync.io/v1/me" \
  -H "Authorization: Bearer sk_live_abc123..."
```

### Response

```json
{
  "data": {
    "id": "user_abc123",
    "email": "user@example.com",
    "name": "Jane Doe",
    "avatar": "https://cdn.cloudsync.io/avatars/abc123.jpg",
    "plan": "pro",
    "createdAt": "2024-01-15T00:00:00Z",
    "settings": {
      "timezone": "America/New_York",
      "notifications": {
        "email": true,
        "push": true
      }
    },
    "usage": {
      "storage": 2147483648,
      "storageLimit": 107374182400,
      "workspaces": 5,
      "workspacesLimit": -1
    }
  }
}
```

## Update Profile

Update the current user's profile.

```http
PATCH /v1/me
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | Display name |
| `avatar` | string | Avatar URL or base64 image |
| `settings` | object | User settings |

### Example

```bash
curl "https://api.cloudsync.io/v1/me" \
  -X PATCH \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "settings": {
      "timezone": "America/Los_Angeles"
    }
  }'
```

## User Notifications

### List Notifications

```http
GET /v1/me/notifications
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `unread` | boolean | Filter unread only |
| `limit` | integer | Max results (default: 50) |

### Response

```json
{
  "data": [
    {
      "id": "notif_abc123",
      "type": "mention",
      "title": "You were mentioned in a comment",
      "body": "@jane commented on report.pdf",
      "link": "/workspaces/my-project/files/report.pdf",
      "read": false,
      "createdAt": "2026-01-06T15:30:00Z"
    }
  ],
  "unreadCount": 3
}
```

### Mark Notification Read

```http
PATCH /v1/me/notifications/:id
```

```bash
curl "https://api.cloudsync.io/v1/me/notifications/notif_abc123" \
  -X PATCH \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{"read": true}'
```

### Mark All Read

```http
POST /v1/me/notifications/mark-all-read
```

## API Keys

### List API Keys

```http
GET /v1/me/api-keys
```

### Response

```json
{
  "data": [
    {
      "id": "key_abc123",
      "name": "Production App",
      "prefix": "sk_live_abc1",
      "permissions": ["files:read", "files:write"],
      "lastUsed": "2026-01-06T14:00:00Z",
      "createdAt": "2025-12-01T00:00:00Z"
    }
  ]
}
```

### Create API Key

```http
POST /v1/me/api-keys
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Key name |
| `permissions` | string[] | Yes | Permission scopes |
| `expiresAt` | string | No | Expiration date |

### Example

```bash
curl "https://api.cloudsync.io/v1/me/api-keys" \
  -X POST \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "CI/CD Pipeline",
    "permissions": ["files:read", "files:write"],
    "expiresAt": "2027-01-01T00:00:00Z"
  }'
```

### Response

```json
{
  "data": {
    "id": "key_new456",
    "name": "CI/CD Pipeline",
    "key": "sk_live_xyz789...",
    "permissions": ["files:read", "files:write"],
    "createdAt": "2026-01-06T16:45:00Z"
  }
}
```

::: warning Save Your Key
The full API key is only shown once. Make sure to copy and securely store it immediately.
:::

### Revoke API Key

```http
DELETE /v1/me/api-keys/:id
```

## User Search

Search for users to invite to workspaces.

```http
GET /v1/users/search
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Email or name to search |

### Example

```bash
curl "https://api.cloudsync.io/v1/users/search?query=jane" \
  -H "Authorization: Bearer sk_live_abc123..."
```

### Response

```json
{
  "data": [
    {
      "id": "user_xyz789",
      "email": "jane@example.com",
      "name": "Jane Smith",
      "avatar": "https://cdn.cloudsync.io/avatars/xyz789.jpg"
    }
  ]
}
```
