import logos from '../data/Logos';

export const getLogo = (name: string) => {
	if (Object.keys(logos).includes(name)) {
		return (logos as any)[name];
	}

	return null;
};

export const getLogos = () => Object.values(logos);
