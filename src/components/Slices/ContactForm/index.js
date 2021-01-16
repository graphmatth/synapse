import React, { useState } from 'react';
import { Container, Wrapper, Title, Description, BoxShadow } from './styles';

const ContactForm = ({ slice }) => {
	const [formState, setFormState] = useState({
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		const formData = { formState };
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'Contact Forn', formData }),
		})
			.then(() => alert('Success!'))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	const encode = (data) => {
		Object.keys(data)
			.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
			.join('&');
	};
	return (
		<Container>
			<Wrapper>
				<Title>{slice.primary.contact_form_title.text}</Title>
				<Description>{slice.primary.contact_form_description.text}</Description>
				<BoxShadow>
					<form
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						method="POST"
						name="Contact Form"
						onSubmit={handleSubmit}
					>
						{/* You still need to add the hidden input with the form name to your JSX form */}
						<input name="Contact Form" type="hidden" value="Contact Form" />
						<div>
							<label htmlFor="email">
								Your Email:
								<input id="email" name="email" type="email" value={formState.name} onChange={handleChange} />
							</label>
						</div>
						<div>
							<label htmlFor="message">
								Message:
								<textarea id="email" name="message" />
							</label>
						</div>
						<button type="submit">Send</button>
					</form>
				</BoxShadow>
			</Wrapper>
		</Container>
	);
};

export default ContactForm;
