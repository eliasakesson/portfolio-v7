import AboutMe from './AboutMe';
import Badge from './Badge';
import Cases from './Cases';
import Hero from './Hero';
import NavHelp from './NavHelp';

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full">
			<Badge />
			<Hero />
			<AboutMe />
			<NavHelp />
			<Cases />
		</main>
	);
}
