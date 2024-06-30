import Link from 'next/link';
import { MdSearchOff } from 'react-icons/md';

const NotFoundPage = () => {
	return (
		<div className="h-screen flex lg:flex-row flex-col">
			<div className="max-w-4xl h-full mx-auto flex flex-col justify-center px-8">
				<MdSearchOff className="text-xl lg:text-lg-xl mb-4" />
				<h1 className="text-2xl lg:text-lg-2xl font-semibold">
					Whoops.
				</h1>
				<p className="text-base">Sidan kunde inte hittas</p>
				<Link
					href="/"
					className="mt-8 w-fit border-2 border-text py-2 px-6 rounded-full font-medium text-sm hover:text-primary hover:border-primary transition-colors"
				>
					Gå till startsidan
				</Link>
			</div>
			<div className="hidden lg:inline-flex bg-secondary h-full w-1/2"></div>
		</div>
	);
};

export default NotFoundPage;
