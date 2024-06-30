import { createClient } from 'contentful';

const client = createClient({
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string
});

export const getEntry = client.getEntry;
export const getEntries = client.getEntries;
