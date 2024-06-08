import Link from 'next/link';
import {
	MdOutlineArrowRightAlt,
	MdOutlineScreenshotMonitor
} from 'react-icons/md';

const Badge = () => {
	return (
		<Link
			href={'#'}
			className="group bg-secondary absolute mt-20 left-1/2 -translate-x-1/2 p-6 w-full max-w-[calc(100vw-64px)] 2xl:max-w-7xl rounded-lg text-md font-medium flex gap-2 items-center justify-between"
		>
			<div className="flex items-center gap-4">
				<MdOutlineScreenshotMonitor size={28} className="flex-none" />
				<span className="relative text-sm lg:text-md">
					Kolla in min senaste e-handelslösning med inbyggt
					designverktyg
					<span className="group-hover:animate-underline-in animate-underline-out transition-all duration-150 absolute h-0.5 bg-black left-0 right-0 bottom-0"></span>
				</span>
			</div>
			<MdOutlineArrowRightAlt size={28} className="flex-none" />
		</Link>
	);
};

export default Badge;
