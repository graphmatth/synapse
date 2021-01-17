import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const SocialFooter = ({ slice }) => {
	const [state, setState] = useState({});
	const [email, setEmail] = useState('');
	const [statusForm, setStatusForm] = useState('');

	const handleChange = (e) => {
		console.log('e', e.target.value);
		setState({ ...state, [e.target.name]: e.target.value });
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		console.log(form);
		addToMailchimp(email)
			.then((data) => {
				// I recommend setting data to React state
				// but you can do whatever you want (including ignoring this `then()` altogether)
				console.log(data);
				setStatusForm(data.msg);
				form.reset();
				setEmail('');
			})
			.catch(() => {
				// unnecessary because Mailchimp only ever
				// returns a 200 status code
				// see below for how to handle errors
			});
	};

	const socialItems = slice.items.map((socialIcon, index) => (
		<SocialLink key={`info=${index}`} href={socialIcon.social_link.url}>
			<img alt="social" src={socialIcon.social_icon.url} />
		</SocialLink>
	));

	return (
		<Container>
			<div>
				<Title>{slice.primary.title.text}</Title>
				<div>{slice.primary.description.text}</div>
			</div>

			<Form method="post" name="email" onSubmit={handleSubmit}>
				<Input
					autoComplete="email"
					id="email"
					label="Email"
					name="email"
					placeholder="Email adress"
					type="email"
					onChange={handleChange}
				/>
				<Submit type="submit">
					<img alt="arrow" src="../../Images/arrow.svg" />
				</Submit>
				<div
					dangerouslySetInnerHTML={{
						__html: statusForm,
					}}
					style={{ padding: 5 }}
				/>
			</Form>

			<SocialContainer>{socialItems}</SocialContainer>
		</Container>
	);
};

export default SocialFooter;

const Submit = styled.button`
	position: absolute;
	right: 8px;
	top: 8px;
	height: 34px;
	width: 34px;
	bottom: 0;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Input = styled.input`
	display: flex;
	align-items: center;
	background-color: #fff;
	height: 50px;
	border-radius: 20px;
	padding: 10px;
	width: 100%;
	&::placeholder {
		color: #8f9f9e;
	}
`;

const Form = styled.form`
	position: relative;
	margin-top: 10px;
	margin-bottom: 10px;
	max-width: 400px;
	width: 100%;
`;

const Title = styled.h3`
	color: #fff;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 600;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	color: ${({ theme }) => theme.colors.grey};
	font-family: 'Inter';
	font-weight: 400;
	margin-bottom: 20px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 0;
`;

const SocialLink = styled.a`
	margin-right: 10px;
`;
