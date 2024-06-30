import AboutMe from './AboutMe';
import Badge from './Badge';
import Cases from './Cases';
import Hero from './Hero';
import QuickLinks from './QuickLinks';
import Journey from './Journey';
import Technologies from './Technologies';
import Contact from './Contact';

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full">
			<Badge />
			<Hero />
			<AboutMe />
			<QuickLinks />
			<Technologies />
			<Journey />
			<Cases />
			<Contact />
		</main>
	);
}
