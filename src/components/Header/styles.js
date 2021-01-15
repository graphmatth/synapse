import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.ternary};
	padding: 20px 0;
	z-index: 20;
`;

export const Hamburger = styled.a`
	height: 20px;
	width: 20px;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 4px;
	padding-bottom: 0px;
	div {
		height: 3px;
		margin-bottom: 4px;
		background-color: #000;
		border-radius: 50px;
		transform-origin: 5px;
		transition: all 0.15s ease-out;
		&:nth-child(1) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Navigation = styled.nav`
	position: fixed;
	height: 100%;
	width: 100vw;
	top: 60px;
	padding: 15px;
	right: 0px;
	transition: transform 0.3s ease-in-out;
	background-color: ${({ theme }) => theme.colors.ternary};
	transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		transform: inherit;
		position: relative;
		display: flex;
		height: auto;
		top: inherit;
	}
`;

export const NavItemContainer = styled.ul`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 100%;
		display: flex;
		align-items: center;
	}
`;

export const NavItem = styled.li`
	font-family: 'aeonikregular';
	margin-bottom: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-left: 30px;
	}
`;

export const HamburgerBar = styled.div`
	transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 1250px;
		margin: 0 auto;
	}
`;
