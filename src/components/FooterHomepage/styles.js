import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.colors.primary};
	margin-top: 100px;
	padding: 20px 0;
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
		max-width: 1250px;
		margin: 0 auto;
	}
`;

export const ItemContainer = styled.div`
	width: 25%;
	margin-top: 10px;
	padding-top: 10px;
`;

export const Logo = styled.img`
	width: 125px;
`;
