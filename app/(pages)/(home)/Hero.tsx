const Hero = () => {
	return (
		<section className="bg-bg2 h-[85vh] w-full flex flex-col items-center justify-center">
			<div className="max-w-7xl w-full px-8 mt-16">
				<h1 className="mt-16 text-2xl lg:text-lg-2xl text-balance font-semibold">
					Full-stack{' '}
					<span className="text-secondary_dark">utvecklare</span> utan
					begränsningar
				</h1>
				<div className="lg:mt-32 mt-16 flex gap-8">
					<div>
						<p className="text-secondary_dark text-xl lg:text-lg-xl font-medium">
							4+
						</p>
						<p className="uppercase text-sm">Års Erfarenhet</p>
					</div>
					<div>
						<p className="text-secondary_dark text-xl lg:text-lg-xl font-medium">
							13+
						</p>
						<p className="uppercase text-sm">Cases</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
