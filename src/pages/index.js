import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import IntroHomepage from '../components/IntroHomepage';
import FooterHomepage from '../components/FooterHomepage';
import SliceZone from '../components/SliceZone';

export default function Home({ data: { prismicHomepage, prismicNavigation, prismicFooter } }) {
	const prismicContent = prismicHomepage.data;
	if (!prismicContent) return null;

	const prismicNavigationContent = prismicNavigation.data;
	if (!prismicNavigationContent) return null;

	const prismicFooterContent = prismicFooter.data;
	if (!prismicFooter) return null;

	return (
		<>
			<Header dataNavigation={prismicNavigationContent} />
			<IntroHomepage dataHomepage={prismicContent} />
			<SliceZone sliceZone={prismicContent.body} />
			<FooterHomepage dataHomepage={prismicFooterContent} />
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

					... on PrismicHomepageBodyContactForm {
						id
						primary {
							contact_form_title {
								text
							}
							contact_form_description {
								text
							}
						}
						slice_type
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

		prismicFooter {
			data {
				footer_logo {
					url
				}
				body {
					... on PrismicFooterBodySection {
						id
						slice_type
						primary {
							title_content
						}
						items {
							text_content
							link {
								url
							}
						}
					}
					... on PrismicFooterBodySocial {
						id
						slice_type
						primary {
							title {
								text
							}
							description {
								text
							}
						}
						items {
							social_icon {
								url
								alt
							}
							social_link {
								url
							}
						}
					}

					... on PrismicFooterBodyLegalMention {
						id
						slice_type
						items {
							link_content
							link {
								url
							}
						}
					}
				}
			}
		}
	}
`;
