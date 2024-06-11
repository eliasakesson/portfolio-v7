import { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';

const useHeaderContext = () => {
	const { activeDropdown, setActiveDropdown } = useContext(HeaderContext);

	const setActiveDropdownFunc = (dropdown: string) => {
		if (activeDropdown === dropdown) {
			setActiveDropdown('');
			return;
		}

		setActiveDropdown(dropdown);
	};

	return { activeDropdown, setActiveDropdown: setActiveDropdownFunc };
};

export default useHeaderContext;
