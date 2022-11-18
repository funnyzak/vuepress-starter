import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/images/icons/favicon-16x16.png`
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/images/icons/favicon-32x32.png`
    }
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: '帮助文档' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: '帮助文档' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: `/logo.png` }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/images/icons/logo-mask.svg',
      color: '#0389c8'
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#0389c8' }],
  ['meta', { name: 'theme-color', content: '#0389c8' }],
  [
    'meta',
    {
      'data-draft-node': 'block',
      'data-draft-type': 'table',
      'data-size': 'normal',
      'data-row-style': 'normal'
    }
  ],
  [
    'meta',
    {
      name: 'referrer',
      content: 'no-referrer'
    }
  ]
]
