import { getCases } from '@/app/utils/getCase';
import Client from './Client';
import { getCasesProps } from '@/app/utils/getLandingPage';

const Cases = async () => {
	const props = await getCasesProps();
	const cases = await getCases();

	return (
		<div id="cases" className="w-full bg-white py-32">
			<Client props={props} cases={cases} />
		</div>
	);
};

export default Cases;
