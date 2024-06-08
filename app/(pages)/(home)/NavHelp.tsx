import Link from 'next/link';

const NavHelp = () => {
	return (
		<div className="bg-bg_dark w-full py-16 flex items-center justify-center">
			<div className="max-w-7xl w-full flex items-center justify-between">
				<h2 className="text-lg font-medium">Letar efter något?</h2>
				<ul className="flex items-center gap-4">
					<li>
						<Link
							href="/cases"
							className="text-base border-2 border-text py-2 px-6 rounded-full font-medium hover:text-primary hover:border-primary transition-colors"
						>
							Cases
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="text-base border-2 border-text py-2 px-6 rounded-full font-medium hover:text-primary hover:border-primary transition-colors"
						>
							Kontakta mig
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavHelp;
