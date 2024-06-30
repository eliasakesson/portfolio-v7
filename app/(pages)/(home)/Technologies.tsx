import { getTechStackProps } from '@/app/utils/getLandingPage';
import { getLogos } from '@/app/utils/getLogo';
import { useMemo } from 'react';

const Technologies = async () => {
	const { techStackTitle, techStackText } = await getTechStackProps();
	const logos = getLogos();

	return (
		<section className="py-24 lg:py-48 flex flex-col gap-8 bg-white w-full">
			<div className="mx-auto max-w-8xl w-full px-8">
				<h2 className="text-xl lg:text-lg-xl font-medium text-balance max-w-[20ch]">
					{techStackTitle}
				</h2>
				<p className="text-base max-w-prose mt-8">{techStackText}</p>
			</div>
			<div className="overflow-hidden pt-16">
				<div className="divide-x-2 flex border-2 w-fit animate-pan-right">
					{[...logos, ...logos].map((logo, i) => (
						<div
							key={i}
							className="lg:p-8 p-4 w-24 lg:w-32 2xl:w-40 3xl:w-48"
						>
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
