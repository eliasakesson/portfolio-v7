import Underline from '@/app/components/Underline';
import Link from 'next/link';
import {
	MdOutlineArrowRightAlt,
	MdOutlineScreenshotMonitor
} from 'react-icons/md';

const Badge = () => {
	return (
		<Link
			href={'/cases/trasmak-uf'}
			className="group bg-secondary absolute mt-24 left-1/2 -translate-x-1/2 p-6 w-full max-w-[calc(100vw-64px)] 2xl:max-w-7xl rounded-lg text-md font-medium flex gap-2 items-center justify-between"
		>
			<div className="flex items-center gap-4">
				<MdOutlineScreenshotMonitor size={28} className="flex-none" />
				<span className="relative text-sm lg:text-md">
					Kolla in min senaste e-handelslösning med inbyggt
					designverktyg
					<Underline />
				</span>
			</div>
			<MdOutlineArrowRightAlt size={28} className="flex-none" />
		</Link>
	);
};

export default Badge;
