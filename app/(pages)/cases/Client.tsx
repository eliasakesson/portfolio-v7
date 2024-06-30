'use client';

import { CaseProps } from '@/app/interfaces/Case';
import Buttons from '../(home)/Cases/Buttons';
import Carousel from '../(home)/Cases/Carousel';
import { CaseProvider } from '@/app/context/CaseContext';
import { CasesProps } from '@/app/interfaces/LandingPage';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const CasesClient = ({
	props,
	cases
}: {
	props: CasesProps;
	cases: CaseProps[];
}) => {
	const searchParams = useSearchParams();

	const filteredCases = useMemo(() => {
		if (!searchParams.has('category')) return cases;

		return cases.filter(c =>
			c.tags
				.map(tag => tag.toLowerCase())
				.includes(searchParams.get('category') as string)
		);
	}, [cases, searchParams]);

	const title = useMemo(() => {
		if (!searchParams.has('category')) return props.casesTitle;

		const category = searchParams.get('category') as string;
		if (category === 'webb')
			return 'Se vilka webbplatser jag har utvecklat';
		if (category === 'app') return 'Se vilka appar jag har byggt';

		return props.casesTitle;
	}, [searchParams, props.casesTitle]);

	return (
		<CaseProvider>
			<div className="max-w-8xl mx-auto px-8">
				<p className="text-primary text-base font-medium">Cases</p>
				<h1 className="text-xl lg:text-lg-xl font-medium">{title}</h1>
				<div className="flex justify-between items-end">
					<p className="mt-8 text-base font-normal text-balance max-w-prose">
						{props.casesText}
					</p>
					<Buttons />
				</div>
			</div>
			<Carousel cases={filteredCases} />
		</CaseProvider>
	);
};

export default CasesClient;
