import useHeaderProps from '@/app/hooks/useHeaderProps';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';

const Nav = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();
	const { navigation } = useHeaderProps();

	return (
		<nav className="lg:block hidden">
			<ul className="flex gap-8 items-center font-medium text-sm">
				{navigation.map((item, i) => (
					<li key={i}>
						{item.url ? (
							<Link
								onClick={() => setActiveDropdown('')}
								href={item.url}
								className="hover:text-primary transition-all"
							>
								{item.title}
							</Link>
						) : (
							<button
								onClick={() =>
									setActiveDropdown(item.title as string)
								}
								className="flex items-center gap-1 hover:text-primary transition-all active:scale-90"
							>
								{item.title}
								<div
									style={{
										transform: `rotateZ(${
											activeDropdown === item.title
												? '180deg'
												: '0'
										})`
									}}
									className="transition-transform duration-200 delay-300"
								>
									<MdArrowDropDown />
								</div>
							</button>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
