import React from 'react';
import styled from 'styled-components';

const LegalMentions = ({ slice }) => {
	const links = slice.items.map((link, index) => (
		<Link key={`info=${index}`} href={link.link.url}>
			{link.link_content}
		</Link>
	));

	return (
		<Container>
			<LinkContainer>{links}</LinkContainer>
			<div>
				© Synapse Medicine&nbsp;
				{new Date().getFullYear()}
			</div>
		</Container>
	);
};

export default LegalMentions;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${({ theme }) => theme.colors.grey};
	padding: 30px 20px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1250px;
		margin: 0 auto;
	}
`;

const Link = styled.a`
	white-space: nowrap;
	margin-right: 20px;
	margin-bottom: 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-bottom: 0;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding-top: 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: auto;
		padding-top: 0px;
	}
`;
