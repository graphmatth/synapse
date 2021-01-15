import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import IntroHomepage from '../components/IntroHomepage';
import SliceZone from '../components/SliceZone';

export default function Home({ data: { prismicHomepage, prismicNavigation } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	const prismicNavigationContent = prismicNavigation.data;
	if (!prismicNavigationContent) return null;

	return (
		<>
			<Header dataNavigation={prismicNavigationContent} />
			<IntroHomepage dataHomepage={prismicContent} />
			<SliceZone sliceZone={prismicContent.body} />
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

				body {
					... on PrismicHomepageBodyPartners {
						id
						slice_type
						items {
							logo_partner {
								url
							}
						}
					}
					... on PrismicHomepageBodyInfosProduct {
						id
						slice_type
						items {
							cta1 {
								text
							}
							product_description {
								text
							}
							product_image {
								url
							}
							product_title {
								text
							}
						}
					}

					... on PrismicHomepageBodyTestimonials {
						id
						slice_type
						primary {
							description_testimonial {
								text
							}
							title_testimonial {
								text
							}
						}
						items {
							testimonial_author {
								text
								html
							}
							testimonial_content {
								text
							}
							testimonial_logo {
								url
							}
						}
					}
				}
			}
		}

		prismicNavigation {
			data {
				menu_links {
					link {
						url
					}
					label {
						text
					}
				}
				logo {
					url
				}
			}
		}
	}
`;
