import React from 'react';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {
	BoxShadow,
	Title,
	Description,
	TestimonialImg,
	Wrapper,
	Content,
	Quote,
	QuoteContainer,
	Author,
	AuthorContainer,
} from './styles';

const Testimonials = ({ slice }) => {
	const testimonialsItems = slice.items.map((testimonial, index) => (
		<div key={`info=${index}`}>
			<QuoteContainer>
				<Quote>“</Quote>
				<Content>{testimonial.testimonial_content.text}</Content>
			</QuoteContainer>
			<AuthorContainer>
				<TestimonialImg alt="infos" src={testimonial.testimonial_logo.url} />
				<Author
					dangerouslySetInnerHTML={{
						__html: testimonial.testimonial_author.html,
					}}
				/>
			</AuthorContainer>
		</div>
	));

	return (
		<Wrapper>
			<div>
				<Title>{slice.primary.title_testimonial.text}</Title>
				<Description>{slice.primary.description_testimonial.text}</Description>
			</div>
			<BoxShadow>
				<Slider dots infinite slidesToScroll={1} slidesToShow={1} speed={500}>
					{testimonialsItems}
				</Slider>
			</BoxShadow>
		</Wrapper>
	);
};

export default Testimonials;
