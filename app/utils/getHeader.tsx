import { HeaderProps } from '../interfaces/Header';
import { getEntries } from '../lib/contentful';
import { extractDataFromContentfulFields } from './contentfulHelper';

const getHeader = async () => {
	const entries = await getEntries({
		content_type: 'header',
		include: 10
	});

	const fields = entries?.items[0]?.fields as any;
	const data = extractDataFromContentfulFields(fields);

	return data as HeaderProps;
};

export default getHeader;
