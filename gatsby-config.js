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
	siteMetadata: {
		title: 'Synapse Medicine: The leading medication intelligence platform | Synapse Médecine',
		description:
			'Get a holistic overview of drug information in real time and ensure an appropriate use of medication for healthcare professionnals and the general public.',
		url: 'http://test-synapse.netlify.app', // No trailing slash allowed!
		twitterUsername: '@SynapseMed',
		siteLanguage: 'en', //
		shortName: 'Synapse', // shortname for manifest. MUST be shorter than 12 charactersLanguage Tag on <html> element
		author: 'Synapse', // Author for schemaORGJSONLD
	},

	plugins: [
		'gatsby-plugin-eslint',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.MAILCHIMP_ENDPOINT,
			},
		},
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: `test-synapse`,
				accessToken: `${process.env.API_KEY}`,
				linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
				schemas: {
					homepage: require('./src/schemas/homepage.json'),
					navigation: require('./src/schemas/navigation.json'),
					footer: require('./src/schemas/footer.json'),
					seo: require('./src/schemas/seo.json'),
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
