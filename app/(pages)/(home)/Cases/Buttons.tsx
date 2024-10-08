import useCaseContext from '@/app/hooks/useCaseContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Buttons = () => {
	const { triggerCaseEvent } = useCaseContext();

	const incrementActiveCaseIndex = () => {
		triggerCaseEvent('next');
	};

	const decrementActiveCaseIndex = () => {
		triggerCaseEvent('prev');
	};

	return (
		<div className="flex gap-6">
			<button
				onClick={decrementActiveCaseIndex}
				className="text-primary hover:bg-trinary_light active:bg-trinary active:scale-90 rounded-full p-2 transition-all"
			>
				<MdChevronLeft size={32} />
			</button>
			<button
				onClick={incrementActiveCaseIndex}
				className="text-primary hover:bg-trinary_light active:bg-trinary active:scale-90 rounded-full p-2 transition-all"
			>
				<MdChevronRight size={32} />
			</button>
		</div>
	);
};

export default Buttons;
