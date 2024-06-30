const SpeedLinks = ({
	links
}: {
	links: { url: string; text: string; Icon?: React.ReactNode }[];
}) => {
	return (
		<div className="bg-bg_dark w-full py-16 flex items-center justify-center">
			<div className="max-w-8xl w-full flex lg:flex-row flex-col lg:items-center justify-between px-8 gap-8">
				<h2 className="text-lg font-medium">Snabblänkar</h2>
				<ul className="flex items-center gap-4 flex-wrap">
					{links.map((link, i) => (
						<li key={i}>
							<a
								href={link.url}
								className="flex gap-2 items-center text-base border-2 border-text py-2 px-6 rounded-full font-medium hover:text-primary hover:border-primary transition-colors"
							>
								{link.Icon}
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SpeedLinks;
