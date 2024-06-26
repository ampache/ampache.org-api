/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  api: [
    'index',
    'api-standards',
    'api-xml-methods',
    'api-json-methods',
    'api-errors',
    'api-examples',
    'api-changelog',
    'api-acls',
    'api-media-methods',
    {
      type: 'category',
      label: 'Browse Methods',
      link: {type: 'doc', id: 'api-browse'},
      items: [
        'browse/album-browse',
        'browse/artist-browse',
        'browse/catalog-browse',
        'browse/follower-browse',
        'browse/genre-browse',
        'browse/label-browse',
        'browse/license-browse',
        'browse/live_stream-browse',
        'browse/playlist-browse',
        'browse/podcast_episode-browse',
        'browse/podcast-browse',
        'browse/share-browse',
        'browse/song-browse',
        'browse/user-browse',
        'browse/video-browse',
      ],
    },
    {
      type: 'category',
      label: 'advanced_search',
      link: {type: 'doc', id: 'api-advanced-search'},
      items: [
        'advanced-search/song-advanced-search',
        'advanced-search/album-advanced-search',
        'advanced-search/artist-advanced-search',
        'advanced-search/label-advanced-search',
        'advanced-search/playlist-advanced-search',
        'advanced-search/podcast-advanced-search',
        'advanced-search/podcast-episode-advanced-search',
        'advanced-search/user-advanced-search',
        'advanced-search/video-advanced-search',
      ],
    },
    'subsonic',
    {
      type: 'category',
      label: 'API5',
      link: {type: 'doc', id: 'api-5/api-5'},
      items: [
        'api-5/api-standards',
        'api-5/api-xml-methods',
        'api-5/api-json-methods',
        'api-5/api-errors',
        'api-5/api-advanced-search',
      ],
    },
    {
      type: 'category',
      label: 'API4',
      link: {type: 'doc', id: 'api-4/api-4'},
      items: [
        'api-4/api-xml-methods',
        'api-4/api-json-methods',
        'api-4/api-errors',
      ],
    },
    {
      type: 'category',
      label: 'API3',
      link: {type: 'doc', id: 'api-3/api-3'},
      items: [
        'api-3/api-xml-methods',
        'api-3/api-errors',
      ],
    },
    {
      type: 'category',
      label: 'Past Releases',
      link: {type: 'doc', id: 'versions/versions'},
      items: [
        {
          type: 'category',
          label: 'API 6.0',
          link: {type: 'doc', id: 'versions/api-6.0/api-6.0'},
          items: [
            'versions/api-6.0/api-standards',
            'versions/api-6.0/api-xml-methods',
            'versions/api-6.0/api-json-methods',
            'versions/api-6.0/api-errors',
            'versions/api-6.0/api-advanced-search',
          ],
        },
        {
          type: 'category',
          label: 'API 5.1',
          link: {type: 'doc', id: 'versions/api-5.1/api-5.1'},
          items: [
            'versions/api-5.1/api-standards',
            'versions/api-5.1/api-xml-methods',
            'versions/api-5.1/api-json-methods',
            'versions/api-5.1/api-errors',
            'versions/api-5.1/api-advanced-search',
          ],
        },
        {
          type: 'category',
          label: 'API 5.0',
          link: {type: 'doc', id: 'versions/api-5.0/api-5.0'},
          items: [
            'versions/api-5.0/api-standards',
            'versions/api-5.0/api-xml-methods',
            'versions/api-5.0/api-json-methods',
            'versions/api-5.0/api-errors',
            'versions/api-5.0/api-advanced-search',
          ],
        },
        {
          type: 'category',
          label: 'API 4.3',
          link: {type: 'doc', id: 'versions/api-4.3/api-4.3'},
          items: [
            'versions/api-4.3/api-xml-methods',
            'versions/api-4.3/api-json-methods',
            'versions/api-4.3/api-errors',
            'versions/api-4.3/api-advanced-search',
          ],
        },
        {
          type: 'category',
          label: 'API 4.2',
          link: {type: 'doc', id: 'versions/api-4.2/api-4.2'},
          items: [
            'versions/api-4.2/api-xml-methods',
            'versions/api-4.2/api-json-methods',
            'versions/api-4.2/api-errors',
            'versions/api-4.2/api-advanced-search',
          ],
        },
        {
          type: 'category',
          label: 'API 4.1',
          link: {type: 'doc', id: 'versions/api-4.1/api-4.1'},
          items: [
            'versions/api-4.1/xml-methods',
          ],
        },
      ],
    },
  ]
};

module.exports = sidebars;
