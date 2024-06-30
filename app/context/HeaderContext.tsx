import { createContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const HeaderContext = createContext({
	activeDropdown: '',
	setActiveDropdown: (id: string) => {},
	lightMode: false
});

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	useEffect(() => {
		const lightModePaths = ['/'];
		if (lightModePaths.includes(pathname)) {
			setState(prev => ({
				...prev,
				lightMode: true
			}));
		} else {
			setState(prev => ({
				...prev,
				lightMode: false
			}));
		}
	}, [pathname]);

	const setActiveDropdown = (id: string) => {
		setState(prev => ({
			...prev,
			activeDropdown: id
		}));
	};

	const initialState = {
		activeDropdown: '',
		setActiveDropdown,
		lightMode: false
	};

	const [state, setState] = useState(initialState);

	return (
		<HeaderContext.Provider value={state}>
			{children}
		</HeaderContext.Provider>
	);
};
