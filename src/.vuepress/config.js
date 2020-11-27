
module.exports = {
  title: 'Appfast Documents',
  description: 'Appfast Documents',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Appfast documents',
      description: 'Mobile App Builder Platform | Mobile Progressive Web App | iOS & Android App Creator | Appfast'
    },
    '/vi/': {
      lang: 'vi-VN',
      title: 'Appfast - Tài liệu hướng dẫn',
      description: 'Mobile App Builder Platform | Mobile Progressive Web App | iOS & Android App Creator | Appfast'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '/',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Select language',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
          '/widget/': getWidget('Widget'),
        }
      },
      '/vi/': {
        selectText: 'Ngôn ngữ',
        label: 'Tiếng Việt',
        ariaLabel: 'Chọn ngôn ngữ',
        nav: require('./nav/vi'),
        sidebar: {
          '/vi/guide/': getGuideSidebarvn('Hướng dẫn', 'Advanced'),
          '/vi/widget/': getWidget('Tiện ích'),
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
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/vi.js'
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'user',
        'getting-started',
      ]
    },
     {
       title: groupB,
       collapsable: false,
       children: [
         'faq'
       ]
     },
  ]
}

function getGuideSidebarvn (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'test',
      ]
    },
     
  ]
}

function getWidget(groupName) {
  return [
    {
      title: groupName,
      collapsable: false,
      children: [
        '',
        'post-content',
        'header-bar',
      ]
    }
  ]
}
