import { getCases } from '@/app/utils/getCase';
import Client from './Client';
import { getCasesProps } from '@/app/utils/getLandingPage';
import { Suspense } from 'react';

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
