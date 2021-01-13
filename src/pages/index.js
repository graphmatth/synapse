import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
	color: ${(props) => props.theme.colors.primary};
	/* font-family: ''; */
	font-family: 'aeonikregular';
`;

export default function Home({ data: { prismicHomepage } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	return <Title>{prismicContent.title.text}</Title>;
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
