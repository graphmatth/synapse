import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 48px;
	line-height: 1.1;
	font-family: 'aeonikbold';
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 20px;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.ternary};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 100px 20px;
	}
`;

const Description = styled.div`
	font-size: 19px;
	line-height: 150%;
	font-weight: 300;
	margin-bottom: 15px;
	margin-top: 15px;
	font-family: 'aeonikregular';
`;

const Cta = styled.a`
	font-size: 19px;
	font-family: 'aeonikbold';
	display: flex;
	align-items: center;
`;

const Arrow = styled.img`
	margin-left: 10px;
`;

const TextSection = styled.div``;

const IntroHomepage = ({ dataHomepage }) => {
	if (!dataHomepage) return null;
	return (
		<Wrapper>
			<TextSection>
				<Title>{dataHomepage.title.text}</Title>
				<Description>{dataHomepage.description.text}</Description>

				<Cta href="https://synapse-medicine.com/en/">
					{dataHomepage.cta[0].label.text}
					<Arrow alt="arrow" src="../../Images/arrow-cta.svg" />
				</Cta>
			</TextSection>
		</Wrapper>
	);
};

export default IntroHomepage;
