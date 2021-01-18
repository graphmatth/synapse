import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, siteLang }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const { defaultTitle, defaultDescription, siteUrl, twitterUsername, author } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname}`,
		siteLanguage: siteLang,
	};

	// schema.org in JSONLD format
	// https://developers.google.com/search/docs/guides/intro-structured-data
	// You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

	const schemaOrgWebPage = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: siteUrl,
		inLanguage: siteLang,
		mainEntityOfPage: siteUrl,
		description: defaultDescription,
		name: defaultTitle,
		author: {
			'@type': 'Person',
			name: author,
		},
		copyrightHolder: {
			'@type': 'Person',
			name: author,
		},
		copyrightYear: '2019',
		creator: {
			'@type': 'Person',
			name: author,
		},
		publisher: {
			'@type': 'Person',
			name: author,
		},
		datePublished: '2021-01-18T10:30:00+01:00',
	};

	return (
		<Helmet title={seo.title}>
			<html lang={seo.siteLanguage} />
			<meta content={seo.description} name="description" />
			<script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
			{/* <meta name="image" content={seo.image} /> */}
			{seo.url && <meta content={seo.url} property="og:url" />}
			{seo.title && <meta content={seo.title} property="og:title" />}
			{seo.description && <meta content={seo.description} property="og:description" />}
			<meta content="summary_large_image" name="twitter:card" />
			{twitterUsername && <meta content={twitterUsername} name="twitter:creator" />}
			{seo.title && <meta content={seo.title} name="twitter:title" />}
			{seo.description && <meta content={seo.description} name="twitter:description" />}
			{/* {seo.image && <meta content={seo.image} name="twitter:image" />} */}
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

SEO.defaultProps = {
	title: null,
	description: null,
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl: url
				twitterUsername
			}
		}
	}
`;
