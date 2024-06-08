const AboutMe = () => {
	return (
		<section className="py-24 lg:py-48 px-8 flex flex-col gap-8">
			<h2 className="text-xl lg:text-lg-xl font-medium text-balance max-w-[20ch]">
				Din partner för{' '}
				<span className="text-primary">digitala lösningar</span>
			</h2>
			<p className="text-base max-w-prose">
				Passionerad och driven fullstack utvecklare, 18 år, med över 6
				års erfarenhet inom programmering. Nyligen utexaminerad från
				teknikprogrammet med inriktning på information och medieteknik
				vid Finnvedens Gymnasium. Karriären började med spelutveckling i
				Unity C#, men fokus senaste 4 åren på fullstack-utveckling med
				moderna teknologier som React.js och Next.js.
			</p>
		</section>
	);
};

export default AboutMe;
