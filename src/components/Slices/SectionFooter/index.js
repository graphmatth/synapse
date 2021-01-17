import React from 'react';
import styled from 'styled-components';

const SectionFooter = ({ slice }) => {
	const sectionsItems = slice.items.map((section, index) => (
		<ListItem key={`info=${index}`}>
			<a href={section.link.url}>{section.text_content}</a>
		</ListItem>
	));

	return (
		<div style={{ display: 'inline' }}>
			<Container>
				<li>
					<Title>{slice.primary.title_content}</Title>
					<ul>{sectionsItems}</ul>
				</li>
			</Container>
		</div>
	);
};

export default SectionFooter;

const Container = styled.ul`
	width: 100%;
	color: ${({ theme }) => theme.colors.grey};
	font-family: 'Inter';
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 25%;
		display: inline-flex;
	}
`;

const ListItem = styled.li`
	margin-bottom: 15px;
`;

const Title = styled.h3`
	color: #fff;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 600;
`;
