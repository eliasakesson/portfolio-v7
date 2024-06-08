import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import useHeaderContext from '@/app/hooks/useHeaderContext';

const Hamburger = () => {
	const { activeDropdown, setActiveDropdown } = useHeaderContext();

	const onClick = () => {
		if (activeDropdown === 'hamburger') {
			setActiveDropdown('');
		} else {
			setActiveDropdown('hamburger');
		}
	};

	return (
		<>
			<button
				className="lg:hidden flex items-center gap-2 font-medium"
				onClick={onClick}
			>
				{activeDropdown === 'hamburger' ? (
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
				{activeDropdown === 'hamburger' && (
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
						<nav className="flex flex-col gap-4 p-12">
							<a href="#" className="text-lg font-medium">
								Hem
							</a>
							<a href="#" className="text-lg font-medium">
								Om oss
							</a>
							<a href="#" className="text-lg font-medium">
								Kontakt
							</a>
						</nav>
						<div className="flex-grow flex items-end">
							<div className="p-4 border-t w-full">
								<button className="w-full py-4 bg-primary text-white font-medium text-md rounded-full">
									Kontakta mig
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Hamburger;
