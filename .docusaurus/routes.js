import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api/',
    component: ComponentCreator('/api/', 'f57'),
    routes: [
      {
        path: '/api/',
        component: ComponentCreator('/api/', '869'),
        routes: [
          {
            path: '/api/',
            component: ComponentCreator('/api/', '882'),
            routes: [
              {
                path: '/api/',
                component: ComponentCreator('/api/', '681'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/album-advanced-search',
                component: ComponentCreator('/api/advanced-search/album-advanced-search', 'f23'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/artist-advanced-search',
                component: ComponentCreator('/api/advanced-search/artist-advanced-search', '9da'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/genre-advanced-search',
                component: ComponentCreator('/api/advanced-search/genre-advanced-search', 'd5a'),
                exact: true
              },
              {
                path: '/api/advanced-search/label-advanced-search',
                component: ComponentCreator('/api/advanced-search/label-advanced-search', 'cb1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/playlist-advanced-search',
                component: ComponentCreator('/api/advanced-search/playlist-advanced-search', 'c60'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/podcast-advanced-search',
                component: ComponentCreator('/api/advanced-search/podcast-advanced-search', '586'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/podcast-episode-advanced-search',
                component: ComponentCreator('/api/advanced-search/podcast-episode-advanced-search', 'a2e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/song-advanced-search',
                component: ComponentCreator('/api/advanced-search/song-advanced-search', '9ff'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/user-advanced-search',
                component: ComponentCreator('/api/advanced-search/user-advanced-search', 'e3e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/advanced-search/video-advanced-search',
                component: ComponentCreator('/api/advanced-search/video-advanced-search', 'ca6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-3/',
                component: ComponentCreator('/api/api-3/', 'c89'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-3/api-errors',
                component: ComponentCreator('/api/api-3/api-errors', '13a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-3/api-xml-methods',
                component: ComponentCreator('/api/api-3/api-xml-methods', '26d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-4/',
                component: ComponentCreator('/api/api-4/', '561'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-4/api-errors',
                component: ComponentCreator('/api/api-4/api-errors', '7e7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-4/api-json-methods',
                component: ComponentCreator('/api/api-4/api-json-methods', '7ac'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-4/api-xml-methods',
                component: ComponentCreator('/api/api-4/api-xml-methods', 'd73'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/',
                component: ComponentCreator('/api/api-5/', '320'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/api-advanced-search',
                component: ComponentCreator('/api/api-5/api-advanced-search', 'be0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/api-errors',
                component: ComponentCreator('/api/api-5/api-errors', 'c73'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/api-json-methods',
                component: ComponentCreator('/api/api-5/api-json-methods', '835'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/api-standards',
                component: ComponentCreator('/api/api-5/api-standards', '03b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-5/api-xml-methods',
                component: ComponentCreator('/api/api-5/api-xml-methods', '6f6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-acls',
                component: ComponentCreator('/api/api-acls', '0e1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-advanced-search',
                component: ComponentCreator('/api/api-advanced-search', '1d1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-changelog',
                component: ComponentCreator('/api/api-changelog', '507'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-errors',
                component: ComponentCreator('/api/api-errors', '35d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-examples',
                component: ComponentCreator('/api/api-examples', '230'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-json-methods',
                component: ComponentCreator('/api/api-json-methods', '3b0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-media-methods',
                component: ComponentCreator('/api/api-media-methods', '0e3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-standards',
                component: ComponentCreator('/api/api-standards', '316'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/api-xml-methods',
                component: ComponentCreator('/api/api-xml-methods', 'd90'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/subsonic',
                component: ComponentCreator('/api/subsonic', 'dbe'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/',
                component: ComponentCreator('/api/versions/', '892'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.1/',
                component: ComponentCreator('/api/versions/api-4.1/', 'f7c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.1/xml-methods',
                component: ComponentCreator('/api/versions/api-4.1/xml-methods', '751'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.2/',
                component: ComponentCreator('/api/versions/api-4.2/', '296'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.2/api-advanced-search',
                component: ComponentCreator('/api/versions/api-4.2/api-advanced-search', '9e9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.2/api-errors',
                component: ComponentCreator('/api/versions/api-4.2/api-errors', '5d7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.2/api-json-methods',
                component: ComponentCreator('/api/versions/api-4.2/api-json-methods', '338'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.2/api-xml-methods',
                component: ComponentCreator('/api/versions/api-4.2/api-xml-methods', '86e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.3/',
                component: ComponentCreator('/api/versions/api-4.3/', '98e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.3/api-advanced-search',
                component: ComponentCreator('/api/versions/api-4.3/api-advanced-search', 'dbf'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.3/api-errors',
                component: ComponentCreator('/api/versions/api-4.3/api-errors', '778'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.3/api-json-methods',
                component: ComponentCreator('/api/versions/api-4.3/api-json-methods', '844'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-4.3/api-xml-methods',
                component: ComponentCreator('/api/versions/api-4.3/api-xml-methods', '3ea'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/',
                component: ComponentCreator('/api/versions/api-5.0/', 'bcb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/api-advanced-search',
                component: ComponentCreator('/api/versions/api-5.0/api-advanced-search', '80a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/api-errors',
                component: ComponentCreator('/api/versions/api-5.0/api-errors', '874'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/api-json-methods',
                component: ComponentCreator('/api/versions/api-5.0/api-json-methods', '2d5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/api-standards',
                component: ComponentCreator('/api/versions/api-5.0/api-standards', 'd1a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.0/api-xml-methods',
                component: ComponentCreator('/api/versions/api-5.0/api-xml-methods', '3f6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/',
                component: ComponentCreator('/api/versions/api-5.1/', '285'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/api-advanced-search',
                component: ComponentCreator('/api/versions/api-5.1/api-advanced-search', 'b0d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/api-errors',
                component: ComponentCreator('/api/versions/api-5.1/api-errors', '9b5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/api-json-methods',
                component: ComponentCreator('/api/versions/api-5.1/api-json-methods', '5e8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/api-standards',
                component: ComponentCreator('/api/versions/api-5.1/api-standards', '2fc'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-5.1/api-xml-methods',
                component: ComponentCreator('/api/versions/api-5.1/api-xml-methods', '340'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/',
                component: ComponentCreator('/api/versions/api-6.0/', 'b37'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/api-advanced-search',
                component: ComponentCreator('/api/versions/api-6.0/api-advanced-search', '316'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/api-errors',
                component: ComponentCreator('/api/versions/api-6.0/api-errors', '408'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/api-json-methods',
                component: ComponentCreator('/api/versions/api-6.0/api-json-methods', 'cab'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/api-standards',
                component: ComponentCreator('/api/versions/api-6.0/api-standards', 'b72'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/api/versions/api-6.0/api-xml-methods',
                component: ComponentCreator('/api/versions/api-6.0/api-xml-methods', 'd07'),
                exact: true,
                sidebar: "api"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
