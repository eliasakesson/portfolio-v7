import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import Hero from '../components/Hero';
import SpeedLinks from '../components/SpeedLinks';
import { SiGithub } from 'react-icons/si';
import Video from '../components/Video';
import { getCase, getCaseSlugs } from '@/app/utils/getCase';
import Description from '../components/Description';
import Contact from '../../(home)/Contact';

export const dynamicParams = false;

export async function generateStaticParams() {
	const caseSlugs = await getCaseSlugs();

	return caseSlugs.map(slug => ({ slug }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
	const c = await getCase(params.slug);

	if (!c) return null;

	const links = [];

	if (c.liveUrl)
		links.push({
			text: 'Livesida',
			url: c.liveUrl,
			Icon: <MdOutlineScreenshotMonitor />
		});
	links.push({ text: 'GitHub', url: c.githubUrl, Icon: <SiGithub /> });

	return (
		<>
			<Hero title={c.title} image={c.image} />
			<SpeedLinks links={links} />
			{c.video && <Video video={c.video} />}
			<Description texts={c.description} />
			<Contact />
		</>
	);
};

export default Page;
