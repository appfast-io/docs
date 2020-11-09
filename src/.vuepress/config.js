const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Guide', link: '/guide/' , ariaLabel: 'Guide' },
          { text: 'Config', link: '/config/' , ariaLabel: 'config' },
        ],
        // sidebar: {
        //   '/': [/* ... */],
        //   '/guide/': [/* ... */],
        //   '/config/': [/* ... */],
        // }
      },
      '/vi/': {
        selectText: 'Việt Nam',
        label: 'Việt Nam',
        editLinkText: 'Appfast - Tài liệu',
        serviceWorker: {
          updatePopup: {
            message: "Cập nhật nội dung mới",
            buttonText: "Cập nhật"
          }
        },
        nav: [
          { text: 'Tổng thể', link: '/vi/nested/' }
        ],
        algolia: {},
        sidebar: {
          '/vi/': [/* ... */],
          '/vi/nested/': [/* ... */]
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Appfast documents',
      description: 'Mobile App Builder Platform | Mobile Progressive Web App | iOS &amp; Android App Creator | Appfast'
    },
    '/vi/': {
      lang: 'vi-VN',
      title: 'Appfast - Tài liệu hướng dẫn',
      description: 'Mobile App Builder Platform | Mobile Progressive Web App | iOS &amp; Android App Creator | Appfast'
    }
  }
}
