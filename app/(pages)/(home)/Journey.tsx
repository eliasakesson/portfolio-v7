import { getJourneyProps } from '@/app/utils/getLandingPage';
import { getLogo } from '@/app/utils/getLogo';

const Journey = async () => {
	const { journeyTitle, journeyText, journeyData } = await getJourneyProps();

	return (
		<div className="bg-primary_darkest w-full lg:py-32 py-16 text-text_light">
			<div className="max-w-8xl mx-auto w-full px-8">
				<h2 className="text-xl lg:text-lg-xl font-medium">
					{journeyTitle}
				</h2>
				<p className="text-base mt-8">{journeyText}</p>
				<div className="flex lg:flex-col mt-16">
					<div className="flex lg:flex-row flex-col gap-8 justify-between">
						{journeyData.map((value, i) => (
							<div key={i} className="flex-1">
								<div
									className={`h-12 w-12 ${
										value.white ? 'brightness-0 invert' : ''
									}`}
								>
									{getLogo(value.logo)}
								</div>
								<h3 className="text-base font-medium mt-4">
									{value.title}
								</h3>
								<div className="text-xs mt-2">{value.text}</div>
								<div className="mt-8 text-text_light_hover">
									{value.date}
								</div>
							</div>
						))}
					</div>
					<div className="flex mx-auto lg:w-full lg:flex-row w-1 flex-col gap-8 bg-white rounded-full lg:h-1 items-center justify-between mt-8">
						{journeyData.map((_, i) => (
							<div key={i} className="flex-1">
								<div className="lg:ml-2 h-4 w-4 bg-white rounded-full"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journey;
