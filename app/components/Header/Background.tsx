import useHasScrolled from '@/app/hooks/useHasScrolled';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import { motion, AnimatePresence } from 'framer-motion';

const Background = () => {
	const hasScrolled = useHasScrolled();
	const { activeDropdown } = useHeaderContext();

	return (
		<AnimatePresence>
			{(hasScrolled || activeDropdown) && (
				<motion.div
					initial={{ translateY: '-100%' }}
					animate={{ translateY: 0 }}
					exit={{
						translateY: '-100%',
						transition: { delay: activeDropdown ? 0.5 : 0 }
					}}
					transition={{
						duration: 0.25,
						ease: 'circInOut'
					}}
					className="fixed left-0 top-0 right-0 h-16 lg:h-20 bg-white -z-10 border-b"
				></motion.div>
			)}
		</AnimatePresence>
	);
};

export default Background;