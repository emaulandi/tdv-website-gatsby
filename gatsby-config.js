module.exports = {
  siteMetadata: {
    headerTitle: "headerTitle",
    headerSubtitle: "headerSubtitle",
    headline: "Hi, my name is Forty",
    description: "A responsive site template designed by HTML5 UP and released under the Creative Commons.",
    actionButton: "get started",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}