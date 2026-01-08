# Workspaces

Workspaces are the fundamental organizational unit in CloudSync. They allow you to group related files and manage access for different projects or teams.

## What is a Workspace?

A workspace is a top-level container that:

- Groups related files together
- Has its own access controls
- Can be shared with team members
- Maintains its own version history

## Creating a Workspace

### Via Desktop Client

1. Open CloudSync
2. Click the **+** button in the sidebar
3. Enter a workspace name
4. Select a local folder to sync
5. Click **Create**

### Via CLI

```bash
cloudsync workspace create "My Project" --path ./my-project
```

### Via API

```typescript
const workspace = await client.workspaces.create({
  name: 'My Project',
  description: 'Project files for Q1 launch'
})
```

## Workspace Settings

### General Settings

| Setting | Description |
|---------|-------------|
| Name | Display name for the workspace |
| Description | Optional description |
| Icon | Custom emoji or image |
| Color | Accent color in the UI |

### Sync Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Sync Interval | How often to check for changes | Real-time |
| Conflict Resolution | How to handle conflicts | Ask user |
| File Filters | Files to include/exclude | All files |

## Access Control

Workspaces support granular access control:

- **Owner** - Full control, can delete workspace
- **Admin** - Can manage members and settings
- **Editor** - Can view, create, edit, and delete files
- **Viewer** - Read-only access

### Inviting Members

```bash
cloudsync workspace invite my-project user@example.com --role editor
```

## Best Practices

::: tip Organization Tips
- Create separate workspaces for each project
- Use consistent naming conventions
- Set up file filters to exclude build artifacts
- Enable version history for important workspaces
:::

::: warning Storage Limits
Free accounts have 5GB per workspace. Pro accounts have 100GB. Enterprise accounts have unlimited storage.
:::

## Related Topics

- [Real-time Sync](/guide/real-time-sync)
- [Collaboration](/guide/collaboration)
- [Security](/guide/security)
