import { getHeroProps } from '@/app/utils/getLandingPage';
import HeroClient from './Client';

const Hero = async () => {
	const props = await getHeroProps();

	return <HeroClient {...props} />;
};

export default Hero;
