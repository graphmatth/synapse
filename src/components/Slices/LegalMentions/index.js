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
	color: ${({ theme }) => theme.colors.grey};
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row-reverse;
		justify-content: space-between;
		width: 100%;
	}
`;

const Link = styled.a`
	white-space: nowrap;
	margin-right: 20px;
	margin-bottom: 20px;
`;

const LinkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 10px;
	padding-top: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: auto;
	}
`;
