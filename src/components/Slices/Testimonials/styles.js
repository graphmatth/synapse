import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1250px;
	padding: 20px;
	margin: 0 auto;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
`;

export const Quote = styled.span`
	font-size: 80px;
	height: 45px;
	display: block;
	color: #ffa48e;
	font-family: 'aeonikregular';
`;

export const QuoteContainer = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
	}
`;

export const AuthorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const Section = styled.section`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		align-content: center;
		justify-content: center;
		margin: 0 auto;
		max-width: 1250px;
	}
`;

export const BoxShadow = styled.div`
	box-shadow: ${({ theme }) => theme.shadows.sm};
	padding: 20px;
	border-radius: 15px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-right: 45px;
	}
`;

export const TestimonialImg = styled.img`
	width: fit-content;
	max-width: 150px;
	margin: 20px auto;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0px;
	}
`;

export const Title = styled.h2`
	font-size: 28px;
	line-height: 1.3;
	font-weight: 600;
	font-family: 'inter';
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 37px;
	}
`;

export const Author = styled.div`
	font-size: 17px;
	line-height: 1.3;
	font-family: 'aeonikregular';
	text-align: center;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 10px;

	strong {
		font-weight: 700;
		font-family: 'aeonikbold';
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0 20px;
	}
`;

export const Description = styled.p`
	font-size: 18px;
	line-height: 1.4;
	font-weight: 400;
	margin-bottom: 15px;
	font-family: 'aeonikregular';
	color: ${({ theme }) => theme.colors.primary};
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 20px;
	}
`;

export const Content = styled.p`
	font-size: 16px;
	padding: 15px;
	line-height: 1.4;
	font-weight: 400;
	font-family: 'aeonikregular';
	color: ${({ theme }) => theme.colors.primary};
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 18px;
	}
`;

export const InfosSection = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
	}
`;
