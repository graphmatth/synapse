/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-eslint',
		'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: `test-synapse`,
				accessToken: `${process.env.API_KEY}`,
				linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
				schemas: {
					homepage: require('./src/schemas/homepage.json'),
					navigation: require('./src/schemas/navigation.json'),
				},
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Inter'],
				},
				custom: {
					families: ['aeonikregular', 'aeonikbold'],
					urls: ['fonts/fonts.css'],
				},
			},
		},
	],
};
