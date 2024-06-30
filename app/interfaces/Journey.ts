export interface JourneyDataProps
	extends Array<{
		title: string;
		text: string;
		date: string;
		logo: string;
		white?: boolean;
	}> {}
