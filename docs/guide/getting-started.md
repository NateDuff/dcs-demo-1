# Getting Started

This guide will walk you through setting up CloudSync for your team in just a few minutes.

## Prerequisites

- A CloudSync account ([sign up here](https://cloudsync.io/signup))
- macOS, Windows, or Linux operating system
- Node.js 18+ (for SDK integration)

## Step 1: Create Your Account

1. Visit [cloudsync.io/signup](https://cloudsync.io/signup)
2. Enter your email and create a password
3. Verify your email address
4. Complete your profile setup

## Step 2: Install the Desktop Client

### macOS

```bash
brew install cloudsync
```

### Windows

Download the installer from [cloudsync.io/download](https://cloudsync.io/download) and run the setup wizard.

### Linux

```bash
# Debian/Ubuntu
curl -fsSL https://get.cloudsync.io | sh

# Fedora
sudo dnf install cloudsync
```

## Step 3: Create Your First Workspace

Once the desktop client is installed:

1. Open CloudSync from your applications
2. Sign in with your account
3. Click **Create Workspace**
4. Choose a name and select a folder to sync
5. Invite team members (optional)

::: info Workspace Limits
Free accounts can create up to 3 workspaces. Upgrade to Pro for unlimited workspaces.
:::

## Step 4: Start Syncing

Drop files into your sync folder and watch them appear on all connected devices instantly!

### Verify Your Setup

You can verify everything is working by running:

```bash
cloudsync status
```

You should see output like:

```
CloudSync v2.5.0
Status: Connected
Workspace: My Project
Files synced: 42
Last sync: just now
```

## Next Steps

- [Learn about Workspaces](/guide/workspaces)
- [Configure Real-time Sync](/guide/real-time-sync)
- [Invite Team Members](/guide/collaboration)
- [Explore the API](/api/)

::: tip Need Help?
Join our [Discord community](https://discord.gg/cloudsync) for support from the team and other users.
:::
