import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.ternary};
`;

export const Wrapper = styled.div`
	max-width: 1250px;
	padding: 20px;
	margin: 0 auto;
`;

export const BoxShadow = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	padding: 10px;
	border-radius: 15px;
`;

export const Title = styled.h2`
	text-align: center;
`;

export const Description = styled.p`
	text-align: center;
`;
