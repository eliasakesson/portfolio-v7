import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import { LiaTimesSolid } from 'react-icons/lia';
import useHeaderProps from '@/app/hooks/useHeaderProps';
import Link from 'next/link';
import {
	MdArrowDropDown,
	MdOutlineArrowLeft,
	MdOutlineArrowRightAlt
} from 'react-icons/md';
import { useEffect, useMemo, useState } from 'react';
import {
	HeaderDropdownItemProps,
	HeaderItemProps
} from '@/app/interfaces/Header';
import { getIcon } from '@/app/utils/getIcon';

const Hamburger = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();

	const hamburgerOpen = useMemo(() => {
		if (!activeDropdown) return false;

		return activeDropdown.includes('hamburger');
	}, [activeDropdown]);

	const onClick = () => {
		if (activeDropdown.includes('hamburger')) {
			setActiveDropdown('');
		} else {
			setActiveDropdown('hamburger');
		}
	};

	return (
		<>
			<button
				className="lg:hidden flex items-center gap-2 font-medium active:text-primary active:scale-90 transition-all"
				onClick={onClick}
			>
				{hamburgerOpen ? (
					<>
						<FaTimes />
						Stäng
					</>
				) : (
					<>
						<FaBars />
						Meny
					</>
				)}
			</button>
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div
						initial={{ translateY: '-100%' }}
						animate={{
							translateY: 0,
							transition: { duration: 0.3, ease: 'circOut' }
						}}
						exit={{ translateY: '-100%' }}
						transition={{
							type: 'tween',
							duration: 0.4,
							ease: 'easeInOut'
						}}
						className="fixed left-0 top-16 right-0 h-[calc(100dvh-64px)] bg-white -z-20 flex flex-col"
					>
						<Inside />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Hamburger;

const Inside = () => {
	const { activeDropdown } = useHeaderContext();

	return (
		<>
			<Main />
			<AnimatePresence>
				{activeDropdown.includes('hamburger-') && <SubMenu />}
			</AnimatePresence>
		</>
	);
};

const Main = () => {
	const [scope, animate] = useAnimate();
	const { activeDropdown, setActiveDropdown } = useHeaderContext();
	const { navigation } = useHeaderProps();

	useEffect(() => {
		if (activeDropdown === 'hamburger') {
			animate(
				scope.current,
				{ transform: 'translateX(0%)' },
				{
					type: 'tween',
					duration: 0.3,
					ease: 'easeInOut'
				}
			);
		} else if (activeDropdown.includes('hamburger')) {
			animate(
				scope.current,
				{ transform: 'translateX(-100%)' },
				{
					type: 'tween',
					duration: 0.3,
					ease: 'easeInOut'
				}
			);
		}
	}, [activeDropdown]);

	return (
		<div
			ref={scope}
			className="absolute top-0 left-0 right-0 h-full flex flex-col"
		>
			<nav>
				<ul className="flex flex-col gap-4 p-12">
					{navigation.map((item, i) => (
						<li key={i}>
							{item.url ? (
								<Link
									onClick={() => setActiveDropdown('')}
									href={item.url}
									className="text-lg w-full font-medium hover:text-primary active:scale-90 transition-all"
								>
									{item.title}
								</Link>
							) : (
								<button
									onClick={() =>
										setActiveDropdown(
											`hamburger-${item.title}`
										)
									}
									className="text-lg font-medium flex items-center justify-between w-full gap-1 hover:text-primary active:scale-90 transition-all"
								>
									{item.title}
									<div
										style={{
											transform: `rotateZ(${
												activeDropdown === item.title
													? '90deg'
													: '-90deg'
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
			<div className="flex-grow flex items-end">
				<div className="p-4 border-t w-full">
					<button className="w-full py-4 bg-primary text-white font-medium text-md rounded-full">
						Kontakta mig
					</button>
				</div>
			</div>
		</div>
	);
};

const SubMenu = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();
	const { navigation } = useHeaderProps();
	const [headerItem, setHeaderItem] = useState<HeaderItemProps>();

	useEffect(() => {
		if (!activeDropdown.includes('hamburger-')) return;

		const item = navigation.find(
			item => `hamburger-${item.title}` === activeDropdown
		);

		setHeaderItem(item);
	}, [activeDropdown, navigation]);

	return (
		<motion.div
			initial={{ translateX: '100%' }}
			animate={{ translateX: 0 }}
			exit={{ translateX: '100%' }}
			transition={{ duration: 0.3, ease: 'easeInOut', type: 'tween' }}
			className="absolute top-0 left-0 right-0 flex flex-col gap-4 px-8 py-4"
		>
			<button
				onClick={() => setActiveDropdown('hamburger')}
				className="text-lg font-medium flex items-center gap-2 mb-4 hover:text-primary active:scale-90 transition-all"
			>
				<MdOutlineArrowRightAlt className="rotate-180" />
				Back
			</button>
			<h2 className="text-xl lg:text-lg-xl text-primary font-medium">
				{headerItem?.title}
			</h2>
			<p className="text-base font-normal">{headerItem?.description}</p>
			<ul className="flex flex-col gap-8 mt-8">
				{headerItem?.dropdownItems?.map((item, i) => (
					<li key={i}>
						{item.url ? (
							<Link
								href={item.url}
								onClick={() => setActiveDropdown('')}
								className="flex items-center gap-4 hover:text-primary active:scale-90 transition-all"
							>
								<HeaderItemInside item={item} />
							</Link>
						) : item.file ? (
							<a
								href={item.file}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-4 hover:text-primary active:scale-90 transition-all"
							>
								<HeaderItemInside item={item} />
							</a>
						) : (
							<div className="flex items-center gap-4">
								<HeaderItemInside item={item} />
							</div>
						)}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

const HeaderItemInside = ({ item }: { item: HeaderDropdownItemProps }) => {
	const Icon = useMemo(() => getIcon(item.icon), [item.icon]);

	return (
		<>
			<Icon size={40} />
			<div>
				<h3 className="text-lg font-medium">{item.title}</h3>
				<p>{item.text}</p>
			</div>
		</>
	);
};
