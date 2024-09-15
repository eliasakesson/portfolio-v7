import { getAboutProps } from '@/app/utils/getLandingPage';
import Image from 'next/image';
import { Fragment } from 'react';
import metaLogo from '@/app/assets/meta-logo.png';
import courseraBadge from '@/app/assets/coursera-badge.png';

const AboutMe = async () => {
	const { aboutTitle, aboutText } = await getAboutProps();

	return (
		<section className="py-24 lg:py-48 px-8 flex flex-col gap-32 bg-bg w-full">
			<a href="" className="group relative w-fit mx-auto">
				<article className="max-w-8xl w-full bg-white rounded-xl flex lg:gap-8 lg:items-center lg:flex-row flex-col">
					<div className="relative w-fit h-24 lg:pl-16 lg:pr-0 px-8 lg:my-0 mt-8 mb-4">
						<Image
							src={metaLogo}
							alt="Meta Logo"
							className="object-contain w-full h-full"
						/>
					</div>
					<div className="flex flex-col gap-2 lg:py-16 lg:px-0 px-8">
						<h2 className="text-base font-semibold">
							Elias Johan Åkesson
						</h2>
						<p className="text-sm">has successfully completed</p>
						<h3 className="text-lg font-semibold">
							Meta Front-End Developer Professional Certificate
						</h3>
					</div>
					<div className="relative h-64 lg:pr-16 lg:ml-auto">
						<Image
							src={courseraBadge}
							alt="Coursera Badge"
							className="object-contain w-full h-full"
						/>
					</div>
				</article>
				<div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2  flex flex-col items-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+16px)] transition-all">
					<p className="text-text bg-white py-2 px-4 rounded-xl text-sm font-semibold">
						Click to verify certificate
					</p>
					<div className="inline-block -translate-y-2 w-0 h-0 border-solid border-t-0 border-r-[10px] border-l-[10px] border-b-[16.6px] rotate-[60deg] border-l-transparent border-r-transparent border-t-transparent border-b-white"></div>
				</div>
			</a>
			<div className="mx-auto">
				<h2 className="text-xl lg:text-lg-xl font-medium text-balance max-w-[20ch]">
					{aboutTitle.map((title, i) => (
						<Fragment key={i}>
							{title.highlighted ? (
								<span className="text-primary">
									{title.text}
								</span>
							) : (
								title.text
							)}
						</Fragment>
					))}
				</h2>
				<p className="text-base max-w-prose mt-8">{aboutText}</p>
			</div>
		</section>
	);
};

export default AboutMe;
