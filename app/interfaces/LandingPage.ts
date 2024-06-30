import { JourneyDataProps } from './Journey';

export interface HeroProps {
	heroTitle: { text: string; highlighted: boolean }[];
	heroTags: { value: string; text: string }[];
	heroImage: string;
	heroVideo: string;
}

export interface BadgeProps {
	badgeText: string;
	badgeLink: string;
}

export interface AboutProps {
	aboutTitle: { text: string; highlighted: boolean }[];
	aboutText: string;
}

export interface QuickLinksProps {
	quickLinksTitle: string;
	quickLinks: { text: string; url: string }[];
}

export interface TechStackProps {
	techStackTitle: string;
	techStackText: string;
}

export interface JourneyProps {
	journeyTitle: string;
	journeyText: string;
	journeyData: JourneyDataProps;
}

export interface CasesProps {
	casesTitle: string;
	casesText: string;
}

export interface ContactProps {
	contactTitle: string;
	contactText: string;
}
