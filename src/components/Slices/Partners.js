import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Logo = styled.img`
	align-self: center;
	padding: 15px;
`;

const FlexContainer = styled.div`
	justify-content: center;
	display: flex;
	flex: 1;
	margin: 15px;
`;
const Partners = ({ slice }) => {
	const isDesktop = useMediaQuery({
		query: `(min-width: 768px)`,
	});
	const sliceImg = slice.items.map((partner, index) => (
		<Logo key={`partner=${index}`} alt="logo" src={partner.logo_partner.url} />
	));

	return (
		<>
			{isDesktop ? (
				<FlexContainer>{sliceImg}</FlexContainer>
			) : (
				<Marquee gradient={false} style={{ margin: 0 }}>
					{sliceImg}
				</Marquee>
			)}
		</>
	);
};

export default Partners;
