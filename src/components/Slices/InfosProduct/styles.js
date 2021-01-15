import styled from 'styled-components';

export const Section = styled.section`
	padding: 20px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		align-content: center;
		justify-content: center;
		max-width: 1250px;
		margin: 0 auto;
	}
`;

export const FeatureImg = styled.img`
	width: fit-content;
	max-width: 100%;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-left: 45px;
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
		font-size: 40px;
	}
`;

export const Description = styled.p`
	font-size: 18px;
	line-height: 1.4;
	font-weight: 400;
	margin-bottom: 15px;
	color: ${({ theme }) => theme.colors.primary};
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 24px;
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

export const Cta = styled.a`
	font-family: 'aeonikbold';
	font-size: 19px;
	color: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
`;

export const Arrow = styled.img`
	margin-left: 10px;
`;
