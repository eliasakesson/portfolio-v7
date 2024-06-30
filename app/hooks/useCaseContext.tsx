import { useContext } from 'react';
import { CaseContext } from '../context/CaseContext';

const useCaseContext = () => {
	const { caseEvent, triggerCaseEvent, resetCaseEvent } =
		useContext(CaseContext);

	return {
		caseEvent,
		triggerCaseEvent,
		resetCaseEvent
	};
};

export default useCaseContext;
