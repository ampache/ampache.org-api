import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api/',
    component: ComponentCreator('/api/', '4f0'),
    routes: [
      {
        path: '/api/',
        component: ComponentCreator('/api/', '7b1'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/album-advanced-search',
        component: ComponentCreator('/api/advanced-search/album-advanced-search', 'ccc'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/artist-advanced-search',
        component: ComponentCreator('/api/advanced-search/artist-advanced-search', '961'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/genre-advanced-search',
        component: ComponentCreator('/api/advanced-search/genre-advanced-search', 'a75'),
        exact: true
      },
      {
        path: '/api/advanced-search/label-advanced-search',
        component: ComponentCreator('/api/advanced-search/label-advanced-search', '510'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/playlist-advanced-search',
        component: ComponentCreator('/api/advanced-search/playlist-advanced-search', 'dec'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/podcast-advanced-search',
        component: ComponentCreator('/api/advanced-search/podcast-advanced-search', '8d1'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/podcast-episode-advanced-search',
        component: ComponentCreator('/api/advanced-search/podcast-episode-advanced-search', '985'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/song-advanced-search',
        component: ComponentCreator('/api/advanced-search/song-advanced-search', 'ce2'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/user-advanced-search',
        component: ComponentCreator('/api/advanced-search/user-advanced-search', '657'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/advanced-search/video-advanced-search',
        component: ComponentCreator('/api/advanced-search/video-advanced-search', '1b7'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-3/',
        component: ComponentCreator('/api/api-3/', '3ab'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-3/api-errors',
        component: ComponentCreator('/api/api-3/api-errors', '5b7'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-3/api-xml-methods',
        component: ComponentCreator('/api/api-3/api-xml-methods', 'bdd'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-4/',
        component: ComponentCreator('/api/api-4/', 'd67'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-4/api-errors',
        component: ComponentCreator('/api/api-4/api-errors', '046'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-4/api-json-methods',
        component: ComponentCreator('/api/api-4/api-json-methods', 'ed4'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-4/api-xml-methods',
        component: ComponentCreator('/api/api-4/api-xml-methods', '969'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/',
        component: ComponentCreator('/api/api-5/', 'eb6'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/api-advanced-search',
        component: ComponentCreator('/api/api-5/api-advanced-search', '552'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/api-errors',
        component: ComponentCreator('/api/api-5/api-errors', 'c99'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/api-json-methods',
        component: ComponentCreator('/api/api-5/api-json-methods', 'a13'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/api-standards',
        component: ComponentCreator('/api/api-5/api-standards', '61d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-5/api-xml-methods',
        component: ComponentCreator('/api/api-5/api-xml-methods', 'f88'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-acls',
        component: ComponentCreator('/api/api-acls', '540'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-advanced-search',
        component: ComponentCreator('/api/api-advanced-search', '6cb'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-changelog',
        component: ComponentCreator('/api/api-changelog', 'b3e'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-errors',
        component: ComponentCreator('/api/api-errors', '12d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-examples',
        component: ComponentCreator('/api/api-examples', 'c0d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-json-methods',
        component: ComponentCreator('/api/api-json-methods', 'a0d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-standards',
        component: ComponentCreator('/api/api-standards', 'e70'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/api-xml-methods',
        component: ComponentCreator('/api/api-xml-methods', '097'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/',
        component: ComponentCreator('/api/versions/', 'd17'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.1/',
        component: ComponentCreator('/api/versions/api-4.1/', 'f03'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.1/xml-methods',
        component: ComponentCreator('/api/versions/api-4.1/xml-methods', 'c5c'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.2/',
        component: ComponentCreator('/api/versions/api-4.2/', 'b53'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.2/api-advanced-search',
        component: ComponentCreator('/api/versions/api-4.2/api-advanced-search', 'f3c'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.2/api-errors',
        component: ComponentCreator('/api/versions/api-4.2/api-errors', '402'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.2/api-json-methods',
        component: ComponentCreator('/api/versions/api-4.2/api-json-methods', 'a1e'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.2/api-xml-methods',
        component: ComponentCreator('/api/versions/api-4.2/api-xml-methods', 'c8f'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.3/',
        component: ComponentCreator('/api/versions/api-4.3/', '930'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.3/api-advanced-search',
        component: ComponentCreator('/api/versions/api-4.3/api-advanced-search', 'c88'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.3/api-errors',
        component: ComponentCreator('/api/versions/api-4.3/api-errors', '20f'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.3/api-json-methods',
        component: ComponentCreator('/api/versions/api-4.3/api-json-methods', 'a48'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-4.3/api-xml-methods',
        component: ComponentCreator('/api/versions/api-4.3/api-xml-methods', 'f48'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/',
        component: ComponentCreator('/api/versions/api-5.0/', 'd67'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/api-advanced-search',
        component: ComponentCreator('/api/versions/api-5.0/api-advanced-search', 'f55'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/api-errors',
        component: ComponentCreator('/api/versions/api-5.0/api-errors', '0ae'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/api-json-methods',
        component: ComponentCreator('/api/versions/api-5.0/api-json-methods', '9df'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/api-standards',
        component: ComponentCreator('/api/versions/api-5.0/api-standards', 'ddd'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.0/api-xml-methods',
        component: ComponentCreator('/api/versions/api-5.0/api-xml-methods', '54d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/',
        component: ComponentCreator('/api/versions/api-5.1/', 'af0'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/api-advanced-search',
        component: ComponentCreator('/api/versions/api-5.1/api-advanced-search', 'bd3'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/api-errors',
        component: ComponentCreator('/api/versions/api-5.1/api-errors', 'b01'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/api-json-methods',
        component: ComponentCreator('/api/versions/api-5.1/api-json-methods', '9c8'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/api-standards',
        component: ComponentCreator('/api/versions/api-5.1/api-standards', 'b2e'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/api/versions/api-5.1/api-xml-methods',
        component: ComponentCreator('/api/versions/api-5.1/api-xml-methods', 'a47'),
        exact: true,
        sidebar: "api"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
