import useHeaderContext from '@/app/hooks/useHeaderContext';
import Link from 'next/link';
import { MdSearch } from 'react-icons/md';

const SearchButton = () => {
	const { setActiveDropdown } = useHeaderContext();

	return (
		<button
			onClick={() => setActiveDropdown('search')}
			className="hidden lg:flex items-center gap-2 py-2 px-6 rounded-full font-medium text-sm hover:text-primary hover:border-primary transition-colors"
		>
			<MdSearch />
			Sök
		</button>
	);
};

export default SearchButton;
