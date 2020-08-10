const config = {
  gatsby: {
    pathPrefix: '/api/',
    siteUrl: 'http://ampache.org/api',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/api/static/img/logo/ampache-top.png',
    logoLink: '',
    title: "Ampache API | Ampache.org",
    githubUrl: 'https://github.com/ampache/ampache',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: 'ampache_api',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/', // add trailing slash if enabled above
      '/api-standards',
      '/api-errors',
      '/api-acls',
      '/api-xml-methods',
      '/api-json-methods',
      '/api-advanced-search',
      '/old-versions',
    ],
    collapsedNav: [
      '/old-versions',
      '/api-4.1.0',
    ],
    links: [{ text: '', link: '' }, 
	        { text: '', link: '' }],
    frontline: false,
    ignoreIndex: false,
    title: "",
  },
  siteMetadata: {
    title: 'Ampache API | Ampache.org',
    description: 'Documentating the Ampache API',
    ogImage: null,
    docsLocation: 'https://github.com/ampache/ampache/wiki',
    favicon: '/api/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Ampache API | Ampache.org',
      short_name: 'AmpacheAPI',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'static/img/logo/ampache-logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
