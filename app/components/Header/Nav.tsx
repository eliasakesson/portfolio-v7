import useHeaderContext from '@/app/hooks/useHeaderContext';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';
import { motion } from 'framer-motion';

const Nav = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();

	return (
		<nav className="lg:block hidden">
			<ul className="flex gap-8 items-center font-medium text-sm">
				<li>
					<button
						onClick={() =>
							setActiveDropdown(!activeDropdown ? 'home' : '')
						}
						className="flex items-center gap-1 hover:text-primary transition-all active:scale-90"
					>
						Home
						<div
							style={{
								transform: `rotateZ(${
									activeDropdown === 'home' ? '180deg' : '0'
								})`
							}}
							className="transition-transform duration-200 delay-300"
						>
							<MdArrowDropDown />
						</div>
					</button>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
