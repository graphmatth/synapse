import React from 'react';
import FooterList from './FooterList';
import SlicesFooter from './SlicesFooter';
import { Footer, Flex, ItemContainer, Logo } from './styles';

const FooterHomepage = ({ dataHomepage }) => {
	if (!dataHomepage) return null;
	return (
		<Footer>
			<Flex>
				<ItemContainer>
					<Logo alt="logo synapse" src={dataHomepage.footer_logo.url} />
				</ItemContainer>
				<FooterList data={dataHomepage.body} />
			</Flex>
			<SlicesFooter data={dataHomepage.body} />
		</Footer>
	);
};

export default FooterHomepage;
