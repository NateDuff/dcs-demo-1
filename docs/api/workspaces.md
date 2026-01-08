# Workspaces API

Create and manage CloudSync workspaces.

## List Workspaces

List all workspaces you have access to.

```http
GET /v1/workspaces
```

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces" \
  -H "Authorization: Bearer sk_live_abc123..."
```

### Response

```json
{
  "data": [
    {
      "id": "ws_abc123",
      "name": "My Project",
      "slug": "my-project",
      "description": "Project files for Q1 launch",
      "role": "owner",
      "createdAt": "2025-06-01T00:00:00Z",
      "stats": {
        "files": 1250,
        "size": 5368709120,
        "members": 5
      }
    }
  ]
}
```

## Get Workspace

Get details for a specific workspace.

```http
GET /v1/workspaces/:id
```

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces/ws_abc123" \
  -H "Authorization: Bearer sk_live_abc123..."
```

## Create Workspace

Create a new workspace.

```http
POST /v1/workspaces
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Workspace name |
| `slug` | string | No | URL-friendly identifier |
| `description` | string | No | Description |
| `settings` | object | No | Workspace settings |

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces" \
  -X POST \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Project",
    "description": "Files for new product launch",
    "settings": {
      "syncMode": "realtime",
      "versionHistory": true
    }
  }'
```

### Response

```json
{
  "data": {
    "id": "ws_new456",
    "name": "New Project",
    "slug": "new-project",
    "description": "Files for new product launch",
    "role": "owner",
    "createdAt": "2026-01-06T16:30:00Z",
    "settings": {
      "syncMode": "realtime",
      "versionHistory": true
    }
  }
}
```

## Update Workspace

Update workspace settings.

```http
PATCH /v1/workspaces/:id
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | Workspace name |
| `description` | string | Description |
| `settings` | object | Workspace settings |

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces/ws_abc123" \
  -X PATCH \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{"description": "Updated description"}'
```

## Delete Workspace

Delete a workspace and all its contents.

```http
DELETE /v1/workspaces/:id
```

::: danger Destructive Operation
This action cannot be undone. All files in the workspace will be permanently deleted.
:::

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces/ws_abc123" \
  -X DELETE \
  -H "Authorization: Bearer sk_live_abc123..."
```

## Workspace Members

### List Members

```http
GET /v1/workspaces/:id/members
```

### Response

```json
{
  "data": [
    {
      "id": "user_abc123",
      "email": "owner@example.com",
      "name": "Jane Doe",
      "role": "owner",
      "joinedAt": "2025-06-01T00:00:00Z"
    },
    {
      "id": "user_xyz789",
      "email": "editor@example.com",
      "name": "John Smith",
      "role": "editor",
      "joinedAt": "2025-07-15T00:00:00Z"
    }
  ]
}
```

### Invite Member

```http
POST /v1/workspaces/:id/members
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | User's email address |
| `role` | string | Yes | Role: `viewer`, `editor`, `admin` |
| `message` | string | No | Custom invitation message |

### Example

```bash
curl "https://api.cloudsync.io/v1/workspaces/ws_abc123/members" \
  -X POST \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "email": "new-member@example.com",
    "role": "editor",
    "message": "Welcome to the project!"
  }'
```

### Update Member Role

```http
PATCH /v1/workspaces/:id/members/:userId
```

### Remove Member

```http
DELETE /v1/workspaces/:id/members/:userId
```

## Workspace Settings

### Settings Object

| Field | Type | Description |
|-------|------|-------------|
| `syncMode` | string | `realtime`, `scheduled`, `manual` |
| `versionHistory` | boolean | Enable version tracking |
| `maxVersions` | integer | Max versions to keep |
| `conflictResolution` | string | `ask`, `auto-merge`, `latest-wins` |
| `ipAllowlist` | string[] | Allowed IP addresses |
| `requireMfa` | boolean | Require MFA for access |

### Example Settings Update

```bash
curl "https://api.cloudsync.io/v1/workspaces/ws_abc123" \
  -X PATCH \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "settings": {
      "versionHistory": true,
      "maxVersions": 50,
      "requireMfa": true
    }
  }'
```
