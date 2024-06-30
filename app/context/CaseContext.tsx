import { createContext, useState } from 'react';

export const CaseContext = createContext({
	caseEvent: null,
	triggerCaseEvent: (type: 'next' | 'prev') => {},
	resetCaseEvent: () => {}
} as CaseEventProps);

interface CaseEventProps {
	caseEvent: 'next' | 'prev' | null;
	triggerCaseEvent: (type: 'next' | 'prev') => void;
	resetCaseEvent: () => void;
}

export const CaseProvider = ({ children }: { children: React.ReactNode }) => {
	const [caseEvent, setCaseEvent] = useState<'next' | 'prev' | null>(null);

	const triggerCaseEvent = (type: 'next' | 'prev') => {
		setCaseEvent(type);
	};

	const resetCaseEvent = () => {
		setCaseEvent(null);
	};

	return (
		<CaseContext.Provider
			value={{ caseEvent, triggerCaseEvent, resetCaseEvent }}
		>
			{children}
		</CaseContext.Provider>
	);
};
