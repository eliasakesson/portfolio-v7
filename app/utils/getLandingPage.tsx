import { JourneyDataProps } from '../interfaces/Journey';
import {
	AboutProps,
	BadgeProps,
	CasesProps,
	ContactProps,
	HeroProps,
	JourneyProps,
	QuickLinksProps,
	TechStackProps
} from '../interfaces/LandingPage';
import { getEntries } from '../lib/contentful';
import {
	extractDataFromContentfulFields,
	splitTitle
} from './contentfulHelper';

const getLandingPage = async () => {
	const entries = await getEntries({
		content_type: 'homepage',
		include: 1
	});

	const fields = entries?.items[0]?.fields as any;
	const data = extractDataFromContentfulFields(fields);

	return data as any;
};

export default getLandingPage;

export const getHeroProps = async () => {
	const landingPage = await getLandingPage();
	const { heroImage, heroVideo, heroTags } = landingPage;

	const heroTitle = splitTitle(landingPage.heroTitle);

	return { heroTitle, heroTags, heroImage, heroVideo } as HeroProps;
};

export const getBadgeProps = async () => {
	const landingPage = await getLandingPage();
	const { badgeText, badgeLink } = landingPage;

	return { badgeText, badgeLink } as BadgeProps;
};

export const getAboutProps = async () => {
	const landingPage = await getLandingPage();
	const { aboutText } = landingPage;

	const aboutTitle = splitTitle(landingPage.aboutTitle);

	return { aboutTitle, aboutText } as AboutProps;
};

export const getQuickLinksProps = async () => {
	const landingPage = await getLandingPage();
	const { quickLinksTitle, quickLinks } = landingPage;

	return { quickLinksTitle, quickLinks } as QuickLinksProps;
};

export const getTechStackProps = async () => {
	const landingPage = await getLandingPage();
	const { techStackTitle, techStackText } = landingPage;

	return { techStackTitle, techStackText } as TechStackProps;
};

export const getJourneyProps = async () => {
	const landingPage = await getLandingPage();
	const { journeyTitle, journeyText, journeyData } = landingPage;

	return { journeyTitle, journeyText, journeyData } as JourneyProps;
};

export const getCasesProps = async () => {
	const landingPage = await getLandingPage();
	const { casesTitle, casesText } = landingPage;

	return { casesTitle, casesText } as CasesProps;
};

export const getContactProps = async () => {
	const landingPage = await getLandingPage();
	const { contactTitle, contactText } = landingPage;

	return { contactTitle, contactText } as ContactProps;
};
