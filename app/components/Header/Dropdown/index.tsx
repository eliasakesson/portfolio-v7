import useHeaderContext from '@/app/hooks/useHeaderContext';
import { AnimatePresence, motion } from 'framer-motion';
import { LiaTimesSolid } from 'react-icons/lia';
import Search from './Search';
import { Fragment, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Underline from '../../Underline';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import useHeaderProps from '@/app/hooks/useHeaderProps';
import { HeaderDropdownItemProps } from '@/app/interfaces/Header';

const Dropdown = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();
	const { navigation } = useHeaderProps();

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (activeDropdown) {
			document.body.style.overflow = 'hidden';
			if (activeDropdown !== 'hamburger') {
				document.body.style.paddingRight = '17px';
			}
		} else {
			timeout = setTimeout(() => {
				document.body.style.overflow = 'auto';
				document.body.style.paddingRight = '0';
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [activeDropdown]);

	const hamburgerOpen = useMemo(() => {
		if (!activeDropdown) return false;

		return activeDropdown.includes('hamburger');
	}, [activeDropdown]);

	return (
		<AnimatePresence>
			{activeDropdown && !hamburgerOpen && (
				<>
					<motion.div
						initial={{ opacity: 0, filter: 'blur(0)' }}
						animate={{ opacity: 1, filter: 'blur(10px)' }}
						exit={{ opacity: 0, filter: 'blur(0)' }}
						transition={{
							duration: 0.25,
							ease: 'circInOut'
						}}
						className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 -z-30"
						onClick={() => setActiveDropdown('')}
					></motion.div>
					<motion.div
						initial={{ translateY: '-150%' }}
						animate={{
							translateY: 0,
							transition: {
								duration: 0.25,
								ease: 'easeInOut'
							}
						}}
						exit={{
							translateY: '-150%',
							transition: {
								duration: 0.25,
								ease: 'easeInOut',
								delay: 0.35
							}
						}}
						className="fixed left-0 top-20 right-0 h-[calc(90dvh-80px)] -z-20 flex transition-colors"
					>
						<button
							onClick={() => setActiveDropdown('')}
							className="absolute top-8 right-8 text-lg"
						>
							<LiaTimesSolid />
						</button>
						{activeDropdown === 'search' && <Search />}
						{navigation.map(
							(nav, i) =>
								nav.title === activeDropdown && (
									<Fragment key={i}>
										<DropdownLeft
											title={nav.title}
											text={nav.description as string}
										/>
										<DropdownRight>
											{nav.dropdownItems?.map(
												(item, i) => (
													<DropdownItem
														key={i}
														index={i}
														{...item}
													/>
												)
											)}
										</DropdownRight>
									</Fragment>
								)
						)}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Dropdown;

const initial = { opacity: 0, translateX: '-25%' };
const animate = { opacity: 1, translateX: 0 };

export const DropdownLeft = ({
	title,
	text
}: {
	title: string;
	text: string;
}) => {
	return (
		<div className="bg-white flex flex-col gap-4 pl-16 xl:pl-32 pt-16 flex-none w-1/3">
			<motion.h1
				initial={initial}
				animate={animate}
				className="text-xl translate-x-full lg:text-lg-xl font-medium text-primary"
			>
				{title}
			</motion.h1>
			<motion.p
				initial={initial}
				animate={animate}
				transition={{ delay: 0.1 }}
				className="text-base"
			>
				{text}
			</motion.p>
		</div>
	);
};

export const DropdownRight = ({
	children,
	className,
	noGrid
}: {
	children: React.ReactNode;
	className?: string;
	noGrid?: boolean;
}) => {
	return (
		<div className={`bg-bg flex-grow-[8] p-24 ${className}`}>
			<div className={noGrid ? '' : `grid grid-cols-2 w-fit gap-16`}>
				{children}
			</div>
		</div>
	);
};

export const DropdownItem = ({
	title,
	text,
	url,
	icon,
	file,
	index
}: HeaderDropdownItemProps & { index: number }) => {
	const { setActiveDropdown } = useHeaderContext();

	const Icon = useMemo(() => {
		const IconComponent = (MdIcons as any)[icon] || (SiIcons as any)[icon];

		if (!IconComponent) {
			return MdIcons.MdWeb;
		}

		return IconComponent;
	}, [icon]);

	const Inside = () => (
		<>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: index * 0.1 }}
			>
				<Icon size={40} />
			</motion.div>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ delay: (index + 1) * 0.1 }}
				className="relative w-fit"
			>
				<h2 className="text-lg font-semibold max-w-[30ch] pb-1">
					{title}
				</h2>
				<Underline />
			</motion.div>
			<motion.p
				initial={initial}
				animate={animate}
				transition={{ delay: (index + 2) * 0.1 }}
				className="text-md max-w-[30ch]"
			>
				{text}
			</motion.p>
		</>
	);

	return url ? (
		<Link
			href={url}
			onClick={() => setActiveDropdown('')}
			className="group flex flex-col gap-2"
		>
			<Inside />
		</Link>
	) : file ? (
		<a
			href={file}
			target="_blank"
			rel="noreferrer"
			className="group flex flex-col gap-2"
		>
			<Inside />
		</a>
	) : (
		<div className="group flex flex-col gap-2">
			<Inside />
		</div>
	);
};
