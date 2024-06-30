'use client';

import { CaseProps } from '@/app/interfaces/Case';
import Buttons from './Buttons';
import Carousel from './Carousel';
import { CaseProvider } from '@/app/context/CaseContext';
import { CasesProps } from '@/app/interfaces/LandingPage';

const CasesClient = ({
	props,
	cases
}: {
	props: CasesProps;
	cases: CaseProps[];
}) => {
	return (
		<CaseProvider>
			<div className="max-w-8xl mx-auto px-8">
				<p className="text-primary text-base font-medium">Cases</p>
				<h2 className="text-xl lg:text-lg-xl font-medium">
					{props.casesTitle}
				</h2>
				<div className="flex justify-between items-end">
					<p className="mt-8 text-base font-normal text-balance max-w-prose">
						{props.casesText}
					</p>
					<Buttons />
				</div>
			</div>
			<Carousel cases={cases} />
		</CaseProvider>
	);
};

export default CasesClient;
