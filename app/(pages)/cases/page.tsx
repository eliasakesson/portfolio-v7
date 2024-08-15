import { getCases } from '@/app/utils/getCase';
import Client from './Client';
import { getCasesProps } from '@/app/utils/getLandingPage';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cases | Elias Åkesson',
	description:
		'Här är några av de projekt jag har arbetat med. Jag har erfarenhet av att arbeta med React, Node.js, Express, MongoDB och mycket mer.'
};

const Cases = async () => {
	const props = await getCasesProps();
	const cases = await getCases();

	return (
		<div id="cases" className="w-full bg-white py-32">
			<Suspense>
				<Client props={props} cases={cases} />
			</Suspense>
		</div>
	);
};

export default Cases;
