# Collaboration

CloudSync includes powerful collaboration features that help teams work together effectively.

## Presence Indicators

See who's viewing or editing files in real-time with presence indicators.

### In Desktop Client

Presence shows as colored dots next to files:
- 🟢 Green - Viewing
- 🟡 Yellow - Editing
- 🔵 Blue - You

### Via SDK

```typescript
// Get users currently viewing a file
const presence = await client.files.getPresence({
  workspace: 'my-project',
  path: '/documents/report.pdf'
})

console.log(presence.viewers) // ['user1@example.com', 'user2@example.com']
console.log(presence.editors) // ['user3@example.com']
```

## Comments

Add comments to files and folders for async communication.

### Adding Comments

```typescript
await client.comments.create({
  workspace: 'my-project',
  path: '/documents/report.pdf',
  content: 'Great work on the executive summary! @jane',
  mentions: ['jane@example.com']
})
```

### Threaded Discussions

Comments support threading for organized discussions:

```typescript
await client.comments.reply({
  commentId: 'comment_123',
  content: 'Thanks! I incorporated the feedback from marketing.'
})
```

## @Mentions

Mention team members to notify them about specific files or comments.

- Type `@` followed by a name to mention someone
- They'll receive a notification with a direct link
- Works in comments and file descriptions

## Activity Feed

Track all activity in your workspace with the activity feed:

```typescript
const activity = await client.activity.list({
  workspace: 'my-project',
  limit: 50
})

activity.forEach(event => {
  console.log(`${event.user} ${event.action} ${event.path}`)
})
```

### Activity Types

| Event | Description |
|-------|-------------|
| `file.created` | New file added |
| `file.modified` | File contents changed |
| `file.deleted` | File removed |
| `file.moved` | File renamed or moved |
| `comment.added` | New comment |
| `member.joined` | New team member |

## Sharing

Share files and folders with external users:

```typescript
const shareLink = await client.sharing.createLink({
  workspace: 'my-project',
  path: '/documents/proposal.pdf',
  expires: '7d',
  permissions: 'view'
})

console.log(shareLink.url) // https://share.cloudsync.io/abc123
```

### Share Options

| Option | Description |
|--------|-------------|
| `expires` | Link expiration (1d, 7d, 30d, never) |
| `permissions` | view, comment, edit |
| `password` | Optional password protection |
| `maxDownloads` | Limit number of downloads |

## Best Practices

::: tip Collaboration Tips
- Use @mentions to keep relevant people in the loop
- Create dedicated workspaces for external collaboration
- Set up notifications for important files
- Use comments instead of email for file discussions
:::
