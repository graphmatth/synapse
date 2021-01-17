import React from 'react';
import styled from 'styled-components';

const NotFound = () => (
	<Container>
		<div>
			<Title>404</Title>
			<Description>The page you are looking for can’t be found.</Description>
		</div>
		<div>
			<Cta href="/">Home</Cta>
		</div>
	</Container>
);

export default NotFound;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.ternary};
	font-family: 'aeonikregular';
	padding: 20px;
	text-align: center;
`;

const Title = styled.h1`
	color: #000;
	font-size: 70px;
	font-family: 'aeonikbold';
	color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const Cta = styled.button`
	background-color: ${({ theme }) => theme.colors.secondary};
	height: 45px;
	padding-left: 35px;
	padding-right: 35px;
	line-height: 35px;
	border-radius: 10px;
	text-align: center;
	display: block;
	margin: 10px auto;
	color: ${({ theme }) => theme.colors.white};
`;
