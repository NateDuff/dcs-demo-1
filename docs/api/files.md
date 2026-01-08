# Files API

Manage files and folders in CloudSync workspaces.

## List Files

List files in a workspace directory.

```http
GET /v1/files
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace` | string | Yes | Workspace ID or slug |
| `path` | string | No | Directory path (default: `/`) |
| `limit` | integer | No | Max results (default: 100, max: 1000) |
| `cursor` | string | No | Pagination cursor |

### Example

```bash
curl "https://api.cloudsync.io/v1/files?workspace=my-project&path=/documents" \
  -H "Authorization: Bearer sk_live_abc123..."
```

### Response

```json
{
  "data": [
    {
      "id": "file_abc123",
      "name": "report.pdf",
      "path": "/documents/report.pdf",
      "type": "file",
      "size": 1048576,
      "mimeType": "application/pdf",
      "hash": "sha256:abc123...",
      "createdAt": "2026-01-06T10:30:00Z",
      "modifiedAt": "2026-01-06T15:45:00Z",
      "createdBy": "user@example.com"
    },
    {
      "id": "folder_xyz789",
      "name": "archive",
      "path": "/documents/archive",
      "type": "folder",
      "createdAt": "2026-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "eyJpZCI6MTAwfQ==",
    "hasMore": false
  }
}
```

## Get File

Get metadata for a specific file.

```http
GET /v1/files/:id
```

### Example

```bash
curl "https://api.cloudsync.io/v1/files/file_abc123" \
  -H "Authorization: Bearer sk_live_abc123..."
```

## Download File

Download file contents.

```http
GET /v1/files/:id/content
```

### Example

```bash
curl "https://api.cloudsync.io/v1/files/file_abc123/content" \
  -H "Authorization: Bearer sk_live_abc123..." \
  -o report.pdf
```

## Upload File

Upload a new file or update an existing file.

```http
POST /v1/files
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace` | string | Yes | Workspace ID or slug |
| `path` | string | Yes | File path including filename |
| `content` | binary | Yes | File content (multipart) |
| `overwrite` | boolean | No | Overwrite if exists (default: false) |

### Example (Multipart)

```bash
curl "https://api.cloudsync.io/v1/files" \
  -H "Authorization: Bearer sk_live_abc123..." \
  -F "workspace=my-project" \
  -F "path=/documents/report.pdf" \
  -F "content=@./report.pdf"
```

### Example (Base64)

```bash
curl "https://api.cloudsync.io/v1/files" \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "workspace": "my-project",
    "path": "/documents/data.json",
    "content": "eyJoZWxsbyI6ICJ3b3JsZCJ9",
    "encoding": "base64"
  }'
```

### Response

```json
{
  "data": {
    "id": "file_new123",
    "name": "report.pdf",
    "path": "/documents/report.pdf",
    "type": "file",
    "size": 1048576,
    "version": 1,
    "createdAt": "2026-01-06T16:00:00Z"
  }
}
```

## Delete File

Delete a file or folder.

```http
DELETE /v1/files/:id
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `recursive` | boolean | No | Delete folder contents (default: false) |

### Example

```bash
curl "https://api.cloudsync.io/v1/files/file_abc123" \
  -X DELETE \
  -H "Authorization: Bearer sk_live_abc123..."
```

## Move/Rename File

Move or rename a file.

```http
PATCH /v1/files/:id
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | No | New path |
| `name` | string | No | New name |

### Example

```bash
curl "https://api.cloudsync.io/v1/files/file_abc123" \
  -X PATCH \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{"path": "/archive/report-2025.pdf"}'
```

## File Versions

List version history for a file.

```http
GET /v1/files/:id/versions
```

### Response

```json
{
  "data": [
    {
      "version": 3,
      "size": 1048576,
      "hash": "sha256:def456...",
      "modifiedAt": "2026-01-06T15:45:00Z",
      "modifiedBy": "user@example.com"
    },
    {
      "version": 2,
      "size": 1024000,
      "hash": "sha256:abc123...",
      "modifiedAt": "2026-01-05T10:30:00Z",
      "modifiedBy": "user@example.com"
    }
  ]
}
```

## Restore Version

Restore a previous version of a file.

```http
POST /v1/files/:id/restore
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | integer | Yes | Version number to restore |

### Example

```bash
curl "https://api.cloudsync.io/v1/files/file_abc123/restore" \
  -X POST \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{"version": 2}'
```
