import useHeaderContext from '@/app/hooks/useHeaderContext';
import { AnimatePresence, motion } from 'framer-motion';
import { LiaTimesSolid } from 'react-icons/lia';
import Search from './Search';

const Dropdown = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();

	return (
		<AnimatePresence>
			{activeDropdown && activeDropdown !== 'hamburger' && (
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
						initial={{ translateY: '-100%' }}
						animate={{
							translateY: 0,
							transition: {
								duration: 0.25,
								ease: 'circInOut'
							}
						}}
						exit={{
							translateY: '-100%',
							transition: {
								duration: 0.25,
								ease: 'circInOut',
								delay: 0.25
							}
						}}
						className="fixed left-0 top-20 right-0 h-[calc(90dvh-80px)] -z-20 flex"
					>
						<button
							onClick={() => setActiveDropdown('')}
							className="absolute top-8 right-8 text-lg"
						>
							<LiaTimesSolid />
						</button>
						{activeDropdown === 'search' && <Search />}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Dropdown;

export const DropdownLeft = ({
	title,
	text
}: {
	title: string;
	text: string;
}) => {
	return (
		<div className="bg-white flex-grow flex flex-col gap-4">
			<p className="text-lg font-medium">{title}</p>
			<p className="text-base text-muted">{text}</p>
		</div>
	);
};

export const DropdownRight = ({
	children,
	className
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <div className={`bg-bg flex-grow-[4] ${className}`}>{children}</div>;
};
