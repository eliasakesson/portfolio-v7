export interface CaseProps {
	slug: string;
	name: string;
	title: string;
	image: string;
	video: string;
	liveUrl: string;
	githubUrl: string;
	description: DescriptionProps;
	tags: string[];
}

export interface DescriptionProps
	extends Array<{
		title: string;
		texts: string[];
	}> {}
