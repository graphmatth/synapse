import React from 'react';
import { Container, Wrapper, Title, Description, BoxShadow } from './styles';
import Form from './Form';

const ContactForm = ({ slice }) => (
	<Container>
		<Wrapper>
			<Title>{slice.primary.contact_form_title.text}</Title>
			<Description>{slice.primary.contact_form_description.text}</Description>
			<BoxShadow>
				<Form />
			</BoxShadow>
		</Wrapper>
	</Container>
);

export default ContactForm;
