
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','223'),
    exact: true
  },
  {
    path: '/blog/ads',
    component: ComponentCreator('/blog/ads','31a'),
    exact: true
  },
  {
    path: '/blog/appfast-app',
    component: ComponentCreator('/blog/appfast-app','6d0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/build-app',
    component: ComponentCreator('/blog/build-app','af9'),
    exact: true
  },
  {
    path: '/blog/content',
    component: ComponentCreator('/blog/content','514'),
    exact: true
  },
  {
    path: '/blog/ecommerce',
    component: ComponentCreator('/blog/ecommerce','d9d'),
    exact: true
  },
  {
    path: '/blog/overview',
    component: ComponentCreator('/blog/overview','5c8'),
    exact: true
  },
  {
    path: '/blog/policies',
    component: ComponentCreator('/blog/policies','c90'),
    exact: true
  },
  {
    path: '/blog/purchase',
    component: ComponentCreator('/blog/purchase','e38'),
    exact: true
  },
  {
    path: '/blog/release-app',
    component: ComponentCreator('/blog/release-app','c73'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/ads',
    component: ComponentCreator('/blog/tags/ads','39a'),
    exact: true
  },
  {
    path: '/blog/tags/app',
    component: ComponentCreator('/blog/tags/app','dfb'),
    exact: true
  },
  {
    path: '/blog/tags/app-builder',
    component: ComponentCreator('/blog/tags/app-builder','865'),
    exact: true
  },
  {
    path: '/blog/tags/appfast',
    component: ComponentCreator('/blog/tags/appfast','75a'),
    exact: true
  },
  {
    path: '/blog/tags/build',
    component: ComponentCreator('/blog/tags/build','df1'),
    exact: true
  },
  {
    path: '/blog/tags/content',
    component: ComponentCreator('/blog/tags/content','c01'),
    exact: true
  },
  {
    path: '/blog/tags/ecommerce',
    component: ComponentCreator('/blog/tags/ecommerce','032'),
    exact: true
  },
  {
    path: '/blog/tags/policy',
    component: ComponentCreator('/blog/tags/policy','5b6'),
    exact: true
  },
  {
    path: '/blog/tags/purchase',
    component: ComponentCreator('/blog/tags/purchase','bcf'),
    exact: true
  },
  {
    path: '/blog/tags/release',
    component: ComponentCreator('/blog/tags/release','aaf'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/test',
    component: ComponentCreator('/test','9d2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','fba'),
    routes: [
      {
        path: '/docs/data-manager/news',
        component: ComponentCreator('/docs/data-manager/news','a91'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-manager/overview',
        component: ComponentCreator('/docs/data-manager/overview','2cb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-manager/products',
        component: ComponentCreator('/docs/data-manager/products','84f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get-started/guide',
        component: ComponentCreator('/docs/get-started/guide','947'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get-started/sign-in',
        component: ComponentCreator('/docs/get-started/sign-in','040'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/project/create-app',
        component: ComponentCreator('/docs/project/create-app','94e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/project/dashboard-overview',
        component: ComponentCreator('/docs/project/dashboard-overview','a57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/project/project-settings',
        component: ComponentCreator('/docs/project/project-settings','f1a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/publish-app/android',
        component: ComponentCreator('/docs/publish-app/android','d5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/publish-app/ios',
        component: ComponentCreator('/docs/publish-app/ios','af8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/publish-app/pwa',
        component: ComponentCreator('/docs/publish-app/pwa','da2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/about',
        component: ComponentCreator('/docs/widget/about','a16'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/content',
        component: ComponentCreator('/docs/widget/content','e03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/ecommerce',
        component: ComponentCreator('/docs/widget/ecommerce','28b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/navigation',
        component: ComponentCreator('/docs/widget/navigation','300'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/orthers',
        component: ComponentCreator('/docs/widget/orthers','f03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/widget/ui',
        component: ComponentCreator('/docs/widget/ui','31c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
