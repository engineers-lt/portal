// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart to work properly.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'エンジニアの登壇を応援する会',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-129667923-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/reports.yaml',
        typeName: 'Report',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/events.yaml',
        typeName: 'Event',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/pages/*.md',
        typeName: 'PageMarkdown',
        route: '/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/members/*.yaml',
        typeName: 'MemberProfile',
      }
    },
  ]
}
