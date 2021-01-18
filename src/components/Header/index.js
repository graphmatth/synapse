import React, { useState } from 'react';
import {
	HeaderContainer,
	Hamburger,
	HamburgerBar,
	Navigation,
	NavItem,
	NavLink,
	NavItemContainer,
	HeaderWrapper,
} from './styles';

const Header = ({ dataNavigation }) => {
	const [isOpen, setIsOpen] = useState(false);
	const renderedMenuLinks = dataNavigation.menu_links
		? dataNavigation.menu_links.map((menuLink, index) => (
				<NavItem key={`top-nav-${index}`}>
					<NavLink href={menuLink.link.url}>{menuLink.label.text}</NavLink>
				</NavItem>
		  ))
		: null;
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<img alt="logo" src={dataNavigation.logo.url} />
				<Hamburger
					isOpen={isOpen}
					role="button"
					tabIndex={0}
					onClick={() => (isOpen === true ? setIsOpen(false) : setIsOpen(true))}
				>
					<HamburgerBar />
					<HamburgerBar />
				</Hamburger>
				<Navigation isOpen={isOpen}>
					<NavItemContainer>{renderedMenuLinks}</NavItemContainer>
				</Navigation>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;
