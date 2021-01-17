import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.ternary};
	padding-top: 60px;
	padding-bottom: 60px;
`;

export const Wrapper = styled.div`
	max-width: 1250px;
	padding: 45px 20px;
	margin: 0 auto;
`;

export const BoxShadow = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	padding: 40px 20px 20px 20px;
	border-radius: 15px;
	max-width: 600px;
	margin: 0 auto;
`;

export const Title = styled.h2`
	text-align: center;
	font-size: 28px;
	line-height: 1.3;
	font-weight: 600;
	font-family: 'inter';
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: 37px;
	}
`;

export const Description = styled.p`
	text-align: center;
	font-size: 18px;
	line-height: 1.4;
	font-weight: 400;
	margin-bottom: 15px;
	color: ${({ theme }) => theme.colors.primary};
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: 20px;
	}
`;

export const Check = styled.img`
	width: 45px;
	margin: 0 auto;
	display: block;
	margin-bottom: 15px;
`;

export const Input = styled.input`
	width: 100%;
	margin-bottom: 10px;
	height: 45px;
	border-radius: 10px;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const TextArea = styled.textarea`
	resize: none;
	padding: 10px;
	min-height: 180px;
	border-radius: 10px;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	&::placeholder {
		color: #8f9f9e;
	}
`;

export const Form = styled.form`
	font-family: 'aeonikregular';
	max-width: 400px;
	margin: 0 auto;
`;

export const Button = styled.button`
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
