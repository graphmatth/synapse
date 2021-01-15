import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 48px;
	line-height: 1.1;
	font-family: 'aeonikbold';
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 68px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 20px;
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.primary};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 100px 20px;
		flex-direction: row;
		align-items: center;
		max-width: 1250px;
	}
`;

export const Description = styled.div`
	font-size: 19px;
	line-height: 150%;
	font-weight: 300;
	margin-bottom: 15px;
	margin-top: 15px;
	font-family: 'aeonikregular';
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 29px;
	}
`;

export const Cta = styled.a`
	font-size: 19px;
	font-family: 'aeonikbold';
	display: flex;
	align-items: center;
`;

export const Arrow = styled.img`
	margin-left: 10px;
`;

export const TextSection = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 50%;
	}
`;

export const Video = styled.video`
	display: none;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
		width: 100%;
		mask-image: url('../../Images/vector-synapse.svg');
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;
	}
`;

export const Background = styled.div`
	background-color: ${({ theme }) => theme.colors.ternary};
`;

export const VideoWrapper = styled.div`
	width: 50%;
`;
