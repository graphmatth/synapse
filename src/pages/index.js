import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default function Home({ data: { prismicHomepage } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	return <div>{prismicContent.title.text}</div>;
}

export const homeQuery = graphql`
	query HomeQuery {
		prismicHomepage {
			data {
				title {
					text
				}
			}
		}
	}
`;

Home.propTypes = {
	data: PropTypes.shape({
		prismicHomepage: PropTypes.shape({
			data: PropTypes.shape({
				title: PropTypes.shape({
					text: PropTypes.string.isRequired,
				}),
			}),
		}),
	}).isRequired,
};
