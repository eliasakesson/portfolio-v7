import { DescriptionProps } from '@/app/interfaces/Case';

const Description = ({ texts }: { texts: DescriptionProps }) => {
	return (
		<div className="max-w-8xl mx-auto flex flex-col gap-16 lg:gap-24 px-8 py-16 lg:py-32">
			{texts.map((item, i) => (
				<div key={i} className="grid lg:grid-cols-2 gap-4">
					<h2 className="text-base font-semibold">{item.title}</h2>
					<div className="space-y-8">
						{item.texts.map((text, i) => (
							<p key={i} className="text-base">
								{text}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Description;
