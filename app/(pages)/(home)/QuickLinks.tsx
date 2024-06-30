import { getQuickLinksProps } from '@/app/utils/getLandingPage';
import Link from 'next/link';

const QuickLinks = async () => {
	const { quickLinksTitle, quickLinks } = await getQuickLinksProps();

	return (
		<div className="bg-bg_dark w-full py-16 flex items-center justify-center">
			<div className="max-w-8xl w-full flex lg:flex-row flex-col lg:items-center gap-8 justify-between px-8">
				<h2 className="text-lg font-medium">{quickLinksTitle}</h2>
				<ul className="flex items-center gap-4 flex-wrap">
					{quickLinks.map((link, i) => (
						<li key={i}>
							<Link
								href={link.url}
								className="text-base border-2 border-text py-2 px-6 rounded-full font-medium hover:text-primary hover:border-primary transition-colors"
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuickLinks;
