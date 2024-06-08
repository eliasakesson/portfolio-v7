import { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';

const useHeaderContext = () => {
	const { activeDropdown, setActiveDropdown } = useContext(HeaderContext);

	return { activeDropdown, setActiveDropdown };
};

export default useHeaderContext;
