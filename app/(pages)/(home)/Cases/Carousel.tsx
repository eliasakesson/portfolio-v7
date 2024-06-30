'use client';

import ImageHoverVideo from '@/app/components/ImageHoverVideo';
import Underline from '@/app/components/Underline';
import useCaseContext from '@/app/hooks/useCaseContext';
import { CaseProps } from '@/app/interfaces/Case';
import Link from 'next/link';
import { forwardRef, useEffect, useRef } from 'react';

const Carousel = ({ cases }: { cases: CaseProps[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLAnchorElement>(null);
	const { caseEvent, resetCaseEvent } = useCaseContext();

	useEffect(() => {
		if (caseEvent === null) return;

		const multiplier =
			caseEvent === 'next' ? 1 : caseEvent === 'prev' ? -1 : 0;

		ref.current?.scrollBy({
			left: (itemRef.current?.offsetWidth ?? 0) * multiplier,
			behavior: 'smooth'
		});

		resetCaseEvent();
	}, [caseEvent, resetCaseEvent]);

	return (
		<div
			ref={ref}
			className="mt-16 overflow-x-scroll snap-x snap-mandatory no-scrollbar"
		>
			<div
				style={{
					gridTemplateColumns: `repeat(${cases.length}, 80vmin)`
				}}
				className={`grid pr-[calc(100vw-80vmin)] lg:pl-[calc(50%-700px)] lg:pr-[calc(100vw-(80vmin+(50%-700px)+16px))] w-fit`}
			>
				{cases.map((c, i) => (
					<CarouselItem
						key={i}
						case={c}
						nr={cases.length - i}
						isLast={i === cases.length - 1}
						ref={itemRef}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;

const CarouselItem = forwardRef(
	(
		{
			case: c,
			nr,
			isLast
		}: { case: CaseProps; nr: number; isLast?: boolean },
		ref: React.ForwardedRef<HTMLAnchorElement>
	) => {
		return (
			<Link
				ref={ref}
				href={`/cases/${c.slug}`}
				className={`group w-full ease-in-out snap-start lg:snap-align-none ${
					isLast ? 'ml-8 pr-8' : 'pl-8'
				}`}
			>
				<div className="relative w-full aspect-video">
					<ImageHoverVideo image={c.image} video={c.video} />
				</div>
				<p className="text-primary font-medium mt-8">Case {nr}</p>
				<h2 className="text-lg font-medium relative mt-4 w-fit">
					{c.title}
					<Underline />
				</h2>
			</Link>
		);
	}
);

CarouselItem.displayName = 'CarouselItem';
