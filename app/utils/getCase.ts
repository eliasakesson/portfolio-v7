import { CaseProps } from '../interfaces/Case';
import { getEntries } from '../lib/contentful';
import { extractDataFromContentfulFields } from './contentfulHelper';

export const getCases = async () => {
	const entries = await getEntries({
		content_type: 'portfolioCase'
	});

	const fields = entries?.items.map(item => item.fields) as any;
	const data = fields.map((field: any) =>
		extractDataFromContentfulFields(field)
	);

	return data as CaseProps[];
};

export const getCase = async (slug: string) => {
	const cases = await getCases();

	return cases.find(c => c.slug === slug);
};

export const getCaseSlugs = async () => {
	try {
		const cases = await getCases();

		return cases.map(c => c.slug);
	} catch (error) {
		console.error(error);
		return [];
	}
};
