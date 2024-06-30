import Image from 'next/image';

const Hero = ({ title, image }: { title: string; image: string }) => {
	return (
		<section className="h-[80vh] flex lg:flex-row flex-col-reverse items-center gap-8 py-16 lg:gap-0">
			<div className="lg:w-1/2 2xl:pl-[calc(50%-668px)] px-8">
				<p className="text-lg font-medium text-primary">Case</p>
				<h1 className="text-xl lg:text-lg-xl font-semibold max-w-prose text-balance">
					{title}
				</h1>
			</div>
			<div className="lg:w-1/2 pl-8 lg:pl-0 w-full">
				{image && (
					<div className="relative aspect-video">
						<Image
							src={image}
							alt={title}
							fill
							className="rounded-l-xl"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero;
