# API Overview

<DcsSection id="overview" label="Overview">

The CloudSync API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.

## Base URL

All API requests should be made to:

```
https://api.cloudsync.io/v1
```

</DcsSection>

<DcsSection id="authentication" label="Authentication">

## Authentication

The CloudSync API uses API keys to authenticate requests. Include your API key in the `Authorization` header:

```bash
curl https://api.cloudsync.io/v1/workspaces \
  -H "Authorization: Bearer sk_live_abc123..."
```

See [Authentication](/api/authentication) for more details.

</DcsSection>

<DcsSection id="request-format" label="Request Format">

## Request Format

Send request bodies as JSON with the `Content-Type: application/json` header:

```bash
curl https://api.cloudsync.io/v1/files \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json" \
  -d '{"workspace": "my-project", "path": "/documents"}'
```

</DcsSection>

<DcsSection id="response-format" label="Response Format">

## Response Format

All responses are JSON-encoded:

```json
{
  "data": {
    "id": "file_abc123",
    "name": "report.pdf",
    "path": "/documents/report.pdf",
    "size": 1048576,
    "createdAt": "2026-01-06T10:30:00Z"
  }
}
```

### Pagination

List endpoints return paginated results:

```json
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTAwfQ==",
    "hasMore": true
  }
}
```

Use the `cursor` parameter to fetch the next page:

```bash
curl "https://api.cloudsync.io/v1/files?cursor=eyJpZCI6MTAwfQ=="
```

</DcsSection>

<DcsSection id="error-handling" label="Error Handling">

## Error Handling

Errors return appropriate HTTP status codes with a JSON body:

```json
{
  "error": {
    "code": "resource_not_found",
    "message": "File not found at the specified path",
    "details": {
      "path": "/documents/missing.pdf"
    }
  }
}
```

### Status Codes

| Code | Description |
|------|-------------|
| `200` | Success |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `429` | Rate Limited |
| `500` | Server Error |

</DcsSection>

<DcsSection id="rate-limiting" label="Rate Limiting">

## Rate Limiting

API requests are limited to:

- **Free plan**: 100 requests/minute
- **Pro plan**: 1,000 requests/minute
- **Enterprise**: Custom limits

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1704534600
```

</DcsSection>

<DcsSection id="sdks" label="SDKs">

## SDKs

Official SDKs are available for popular languages:

::: code-group

```bash [JavaScript/TypeScript]
npm install @cloudsync/sdk
```

```bash [Python]
pip install cloudsync
```

```bash [Go]
go get github.com/cloudsync/cloudsync-go
```

```bash [Ruby]
gem install cloudsync
```

:::

</DcsSection>

<DcsSection id="api-reference" label="API Reference">

## API Reference

- [Authentication](/api/authentication) - API keys and OAuth
- [Files](/api/files) - Upload, download, and manage files
- [Workspaces](/api/workspaces) - Create and manage workspaces
- [Users](/api/users) - User management and permissions

</DcsSection>
