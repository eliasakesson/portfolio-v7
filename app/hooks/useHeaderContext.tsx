import { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';

const useHeaderContext = () => {
	const { activeDropdown, setActiveDropdown, lightMode } =
		useContext(HeaderContext);

	const setActiveDropdownFunc = (dropdown: string) => {
		if (activeDropdown === dropdown) {
			setActiveDropdown('');
			return;
		}

		setActiveDropdown(dropdown);
	};

	return {
		activeDropdown,
		setActiveDropdown: setActiveDropdownFunc,
		lightMode
	};
};

export default useHeaderContext;
