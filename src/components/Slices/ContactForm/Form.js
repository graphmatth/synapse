import React, { useState } from 'react';
import { Description, Check, Input, TextArea, Form, Button } from './styles';

function encode(data) {
	return Object.keys(data)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
		.join('&');
}

export default function Contact() {
	const [state, setState] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...state,
			}),
		})
			.then(() => setIsSubmit(true))
			.catch((error) => console.warn(error));
	};
	return (
		<div>
			{!isSubmit ? (
				<Form
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					method="post"
					name="contact"
					onSubmit={handleSubmit}
				>
					{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
					<input name="form-name" type="hidden" value="contact" />
					<p hidden>
						<label htmlFor="bot">
							Don’t fill this out:
							<input id="bot" name="bot-field" onChange={handleChange} />
						</label>
					</p>

					<Input id="FirstName" name="name" placeholder="First Name*" type="text" onChange={handleChange} />
					<Input id="LastName" name="LastName" placeholder="Last Name*" type="text" onChange={handleChange} />
					<Input id="Company" name="Company" placeholder="Company Name*" type="text" onChange={handleChange} />
					<Input required id="email" name="email" placeholder="Email adress*" type="email" onChange={handleChange} />
					<TextArea required id="message" name="message" placeholder="Message" onChange={handleChange} />
					<div>
						<Button type="submit">Submit</Button>
					</div>
				</Form>
			) : (
				<div>
					<Check alt="Check" src="../../Images/check.svg" />
					<Description>Thank You!</Description>
					<Description>Your Form submission has been received</Description>
				</div>
			)}
		</div>
	);
}
