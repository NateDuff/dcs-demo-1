# Changelog

All notable changes to CloudSync.

## v2.5.0 - January 2026

**Real-time Presence**

### New Features

- 🟢 **Real-time presence indicators** - See who's viewing and editing files in real-time
- 🔀 **Conflict resolution UI** - New visual interface for handling merge conflicts
- ⚡ **Improved sync performance** - Large files sync up to 3x faster
- 🔔 **Smart notifications** - AI-powered notification grouping

### Improvements

- Reduced memory usage by 40% on desktop clients
- Added keyboard shortcuts for common actions
- Improved accessibility across all interfaces
- Better error messages with actionable suggestions

### Bug Fixes

- Fixed rare sync loop with nested folders
- Resolved file permission issues on Windows
- Fixed OAuth token refresh race condition

---

## v2.4.0 - December 2025

**Webhooks & Integrations**

### New Features

- 🪝 **Custom webhooks** - Subscribe to sync events with HMAC verification
- 🔌 **Zapier integration** - Connect CloudSync to 5,000+ apps
- 📊 **Usage analytics dashboard** - Track storage and sync metrics
- 🌐 **Multi-region support** - Choose data residency (US, EU, Asia)

### Improvements

- New workspace creation wizard
- Streamlined sharing flow
- Better search with filters

### Bug Fixes

- Fixed duplicate notifications issue
- Resolved file preview for large PDFs
- Fixed mobile app sync on poor connections

---

## v2.3.0 - October 2025

**Enhanced Security**

### New Features

- 🔐 **End-to-end encryption** - Optional E2EE for sensitive workspaces
- 🛡️ **IP allowlisting** - Restrict access by IP address
- 📋 **Audit logs** - Comprehensive activity tracking
- 🔑 **SCIM provisioning** - Automated user management

### Improvements

- Faster initial sync for large workspaces
- Improved conflict detection
- Better offline mode support

---

## v2.2.0 - August 2025

**Collaboration Features**

### New Features

- 💬 **Comments** - Add comments to files and folders
- 📌 **Pins** - Pin important files for quick access
- 🏷️ **Tags** - Organize files with custom tags
- 📱 **Mobile app v2** - Redesigned iOS and Android apps

### Improvements

- Reduced sync latency by 50%
- New file preview system
- Improved search relevance

---

## v2.1.0 - June 2025

**Performance & Polish**

### New Features

- ⚡ **Delta sync** - Only changed bytes are transferred
- 📁 **Smart folders** - Auto-organize with rules
- 🎨 **Custom themes** - Light, dark, and custom color schemes

### Improvements

- 60% reduction in bandwidth usage
- Faster desktop app startup
- Better handling of large files (10GB+)

---

## v2.0.0 - March 2025

**Major Release**

### Breaking Changes

- New API v2 endpoints (v1 deprecated)
- Updated SDK with async/await patterns
- New authentication flow

### New Features

- 🔄 **Real-time sync engine** - Complete rewrite for instant updates
- 👥 **Team workspaces** - Share with granular permissions
- 📜 **Version history** - Track and restore previous versions
- 🔍 **Full-text search** - Search inside documents

### Migration Guide

See our [v2 migration guide](https://cloudsync.io/docs/migration/v2) for upgrade instructions.
