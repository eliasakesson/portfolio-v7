import { createContext, useState } from 'react';

export const HeaderContext = createContext({
	activeDropdown: '',
	setActiveDropdown: (id: string) => {}
});

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
	const setActiveDropdown = (id: string) => {
		setState(prev => ({
			...prev,
			activeDropdown: id
		}));
	};

	const initialState = {
		activeDropdown: '',
		setActiveDropdown
	};

	const [state, setState] = useState(initialState);

	return (
		<HeaderContext.Provider value={state}>
			{children}
		</HeaderContext.Provider>
	);
};
