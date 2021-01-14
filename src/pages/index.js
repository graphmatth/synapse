import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import IntroHomepage from '../components/IntroHomepage';

export default function Home({ data: { prismicHomepage, prismicNavigation } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	const prismicNavigationContent = prismicNavigation.data;
	if (!prismicNavigationContent) return null;

	return (
		<>
			<Header dataNavigation={prismicNavigationContent} />
			<IntroHomepage dataHomepage={prismicContent} />
		</>
	);
}

export const homeQuery = graphql`
	query HomeQuery {
		prismicHomepage {
			data {
				title {
					text
				}
				description {
					text
				}
				cta {
					label {
						text
					}
					link {
						url
					}
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
