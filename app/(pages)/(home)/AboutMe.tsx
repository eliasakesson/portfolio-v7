import { getAboutProps } from '@/app/utils/getLandingPage';
import { Fragment } from 'react';

const AboutMe = async () => {
	const { aboutTitle, aboutText } = await getAboutProps();

	return (
		<section className="py-24 lg:py-48 px-8 flex flex-col gap-8 bg-bg w-full">
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
