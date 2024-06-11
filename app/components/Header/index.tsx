'use client';

import Image from 'next/image';
import Hamburger from './Hamburger';
import Nav from './Nav';
import { motion, useAnimate } from 'framer-motion';
import useHasScrolled from '@/app/hooks/useHasScrolled';
import { useEffect } from 'react';
import Dropdown from './Dropdown';
import { HeaderProvider } from '@/app/context/HeaderContext';
import Background from './Background';
import Link from 'next/link';
import ContactButton from './ContactButton';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import SearchButton from './SearchButton';

const Header = () => {
	const { setActiveDropdown } = useHeaderContext();

	return (
		<HeaderProvider>
			<header className="fixed z-30 top-0 left-0 right-0 lg:h-20 h-16 flex items-center justify-between lg:px-32 px-8">
				<Background />
				<div className="flex items-center gap-16">
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="Logo"
							width={28}
							height={28}
							className="object-contain lg:h-12 h-8"
						/>
					</Link>
					<Nav />
				</div>
				<div className="flex items-center gap-4">
					<Hamburger />
					<SearchButton />
					<ContactButton />
				</div>
				<Dropdown />
			</header>
		</HeaderProvider>
	);
};

export default Header;
