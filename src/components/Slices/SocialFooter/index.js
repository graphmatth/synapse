import React from 'react';
import styled from 'styled-components';

const SocialFooter = ({ slice }) => {
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
			<SocialContainer>{socialItems}</SocialContainer>
		</Container>
	);
};

export default SocialFooter;

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
