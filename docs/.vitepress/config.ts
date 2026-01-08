import { defineConfig } from 'vitepress'
import { dcsContentPlugin, dcsSeoPlugin } from '@duffcloudservices/cms/plugins'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CloudSync Docs",
  description: "The modern cloud synchronization platform for teams",
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'CloudSync Docs' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Changelog', link: '/changelog' },
      {
        text: 'v2.5.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Contributing', link: '/contributing' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is CloudSync?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Quick Start', link: '/guide/quickstart' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Workspaces', link: '/guide/workspaces' },
            { text: 'Real-time Sync', link: '/guide/real-time-sync' },
            { text: 'Collaboration', link: '/guide/collaboration' }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Webhooks', link: '/guide/webhooks' },
            { text: 'Security', link: '/guide/security' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Files', link: '/api/files' },
            { text: 'Workspaces', link: '/api/workspaces' },
            { text: 'Users', link: '/api/users' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudsync' },
      { icon: 'twitter', link: 'https://twitter.com/cloudsync' },
      { icon: 'discord', link: 'https://discord.gg/cloudsync' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2026 CloudSync Inc.'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/cloudsync/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // DCS CMS Integration - inject content at build time
  vite: {
    plugins: [
      // Type assertion needed for Vite version compatibility
      dcsContentPlugin({ contentPath: '../.dcs/content.yaml' }) as any,
      dcsSeoPlugin({ seoPath: '../.dcs/seo.yaml' }) as any,
    ]
  }
})
