import useHeaderContext from '@/app/hooks/useHeaderContext';
import { AnimatePresence, motion } from 'framer-motion';

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
						<div className="bg-white flex-grow"></div>
						<div className="bg-bg flex-grow-[4]"></div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Dropdown;
