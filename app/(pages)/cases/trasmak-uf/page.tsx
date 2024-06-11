import { SiGithub } from 'react-icons/si';
import Hero from '../components/Hero';
import SpeedLinks from '../components/SpeedLinks';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';

const TrasmakUfPage = () => {
	return (
		<>
			<Hero
				title="Träsmak UF - E-handelslösning med inbyggt designverktyg"
				underline="Webbutveckling"
				video="/videos/trasmak-uf.mp4"
			/>
			<SpeedLinks
				links={[
					{
						text: 'Livesida',
						url: 'https://trasmakuf.se',
						Icon: <MdOutlineScreenshotMonitor />
					},
					{
						text: 'GitHub',
						url: 'https://github.com/eliasakesson/Trasmak-UF',
						Icon: <SiGithub />
					}
				]}
			/>
		</>
	);
};

export default TrasmakUfPage;
