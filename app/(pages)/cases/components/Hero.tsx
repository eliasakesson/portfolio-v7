const Hero = ({
	title,
	underline,
	video
}: {
	title: string;
	underline: string;
	video: string;
}) => {
	return (
		<section className="h-[80vh] flex lg:flex-row flex-col-reverse items-center gap-8 py-16 lg:gap-0">
			<div className="lg:w-1/2 2xl:pl-[calc(50%-800px)] px-8">
				<p className="text-lg font-medium text-primary">Case</p>
				<h1 className="text-xl lg:text-lg-xl font-semibold max-w-prose text-balance">
					{title}
				</h1>
				<p className="mt-8 text-base text-muted">{underline}</p>
			</div>
			<div className="lg:w-1/2 pl-8 lg:pl-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					src={video}
					className="rounded-l-xl"
				></video>
			</div>
		</section>
	);
};

export default Hero;
