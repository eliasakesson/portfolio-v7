import ImageHoverVideo from '@/app/components/ImageHoverVideo';
import Underline from '@/app/components/Underline';
import Image from 'next/image';
import Link from 'next/link';

const Cases = () => {
	return (
		<div className="w-full bg-white py-32">
			<div className="max-w-7xl mx-auto px-8">
				<p className="text-primary text-base font-medium">Cases</p>
				<h2 className="text-xl lg:text-lg-xl font-medium">
					Se mina senaste projekt
				</h2>
				<p className="mt-8 text-base font-normal text-balance max-w-prose">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					hac habitasse platea dictumst.
				</p>
			</div>
			<div className="mt-16 flex px-8 gap-8 overflow-x-scroll scroll-smooth snap-mandatory snap-x max-w-none no-scrollbar xl:ml-[calc(50%-640px)]">
				<Link
					href="/cases/trasmak-uf"
					className="group flex-none lg:w-[50%] w-[70%]"
				>
					<div className="relative w-full aspect-video">
						<ImageHoverVideo
							image="https://via.placeholder.com/150"
							video="/videos/trasmak-uf.mp4"
						/>
					</div>
					<p className="text-primary font-medium mt-8">Case 1</p>
					<h2 className="text-lg font-medium relative mt-4 w-fit">
						Träsmak UF - E-handelslösning med inbyggt designverktyg
						<Underline />
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Cases;
