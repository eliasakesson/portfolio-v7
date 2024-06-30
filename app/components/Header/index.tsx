'use client';

import Hamburger from './Hamburger';
import Nav from './Nav';
import Dropdown from './Dropdown';
import { HeaderProvider } from '@/app/context/HeaderContext';
import Background from './Background';
import ContactButton from './ContactButton';
import SearchButton from './SearchButton';
import Logo from './Logo';

const Header = () => {
	return (
		<HeaderProvider>
			<header className="fixed z-30 top-0 left-0 right-0">
				<Background className="flex items-center justify-between lg:h-20 h-16 lg:px-32 px-8">
					<div className="flex items-center gap-16">
						<Logo />
						<Nav />
					</div>
					<div className="flex items-center gap-4">
						<Hamburger />
						<SearchButton />
						<ContactButton />
					</div>
					<Dropdown />
				</Background>
			</header>
		</HeaderProvider>
	);
};

export default Header;
