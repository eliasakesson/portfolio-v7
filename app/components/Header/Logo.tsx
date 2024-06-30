import useHeaderContext from '@/app/hooks/useHeaderContext';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	const { setActiveDropdown } = useHeaderContext();

	return (
		<Link onClick={() => setActiveDropdown('')} href="/">
			<Image
				src="/images/logo.png"
				alt="Logo"
				width={28}
				height={28}
				className="object-contain lg:h-12 h-8"
			/>
		</Link>
	);
};

export default Logo;
