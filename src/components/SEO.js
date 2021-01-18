import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, siteLang }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const { defaultTitle, defaultDescription, siteUrl, twitterUsername } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname}`,
		siteLanguage: siteLang,
	};

	return (
		<Helmet title={seo.title}>
			<html lang={seo.siteLanguage} />
			<meta content={seo.description} name="description" />
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
