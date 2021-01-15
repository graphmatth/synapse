import React from 'react';
import { Section, InfosSection, Title, Description, Cta, Arrow, FeatureImg } from './styles';

const InfosProduct = ({ slice }) => {
	const infos = slice.items.map((info, index) => (
		<Section key={`info=${index}`}>
			<InfosSection>
				<Title>{info.product_title.text}</Title>
				<Description>{info.product_description.text}</Description>
				<Cta>
					{info.cta1.text}
					<Arrow alt="arrow" src="../../Images/arrow-cta.svg" />
				</Cta>
			</InfosSection>
			<InfosSection>
				<FeatureImg alt="infos" src={info.product_image.url} />
			</InfosSection>
		</Section>
	));

	return <>{infos}</>;
};

export default InfosProduct;
