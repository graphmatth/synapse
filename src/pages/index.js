import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';

export default function Home({ data: { prismicHomepage, prismicNavigation } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	const prismicNavigationContent = prismicNavigation.data;
	if (!prismicNavigationContent) return null;

	return <Header dataNavigation={prismicNavigationContent} />;
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

		prismicNavigation {
			data {
				logo {
					url
				}
				menu_links {
					label {
						text
					}
					link {
						url
					}
				}
			}
		}
	}
`;
