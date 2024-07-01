'use client';

import { HeroProps } from '@/app/interfaces/LandingPage';
import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';

const HeroClient = ({
	heroImage,
	heroVideo,
	heroTitle,
	heroTags
}: HeroProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoPlayBarRef = useRef<HTMLDivElement>(null);

	const animationRef = useRef<Animation | null>(null);
	const [isPlaying, setIsPlaying] = useState(true);

	const pauseVideo = () => {
		if (!videoRef?.current) return;

		if (videoRef.current.paused) {
			setIsPlaying(true);
			videoRef.current.play();
		} else {
			setIsPlaying(false);
			videoRef.current.pause();
		}
	};

	useEffect(() => {
		if (isPlaying) {
			animatePlayBar();
		} else {
			animationRef.current?.pause();
		}

		return () => {
			animationRef.current?.pause();
		};
	}, [videoRef.current, isPlaying]);

	const animatePlayBar = () => {
		if (!videoRef.current || !videoPlayBarRef.current) return;

		const currentTime = videoRef.current.currentTime;
		const duration = videoRef.current.duration;
		const remainingTime = duration - currentTime;
		const timePlayedPercentage = (currentTime / duration) * 100;

		animationRef.current = videoPlayBarRef.current.animate(
			[
				{ transform: `scaleX(${timePlayedPercentage}%)` },
				{ transform: 'scaleX(1)' }
			],
			{
				duration: (remainingTime || 1) * 1000,
				iterations: 1
			}
		);

		animationRef.current.onfinish = () => {
			if (!videoRef.current) return;

			if (videoRef.current.paused) {
				animationRef.current?.cancel();
				return;
			}

			animationRef.current = null;
			animatePlayBar();
		};
	};

	return (
		<section className="lg:h-[85vh] h-[100dvh] w-full flex flex-col items-center justify-center text-text_light">
			<div className="absolute top-0 left-0 right-0 bottom-0 lg:bottom-[15vh] -z-10">
				<div className="relative w-full h-full">
					{heroVideo ? (
						<video
							ref={videoRef}
							className="object-cover w-full h-full"
							autoPlay
							loop
							muted
							controls={false}
							playsInline
							preload="auto"
						>
							<source src={heroVideo} type="video/mp4" />
						</video>
					) : (
						heroImage && (
							<Image
								src={heroImage}
								alt="Hero image"
								fill
								className="object-cover"
							/>
						)
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-65"></div>
					<div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-40"></div>
				</div>
			</div>
			<div className="max-w-8xl w-full px-8 mt-16">
				<h1 className="mt-24 text-2xl lg:text-lg-2xl leading-tight lg:leading-normal text-balance font-semibold">
					{heroTitle.map((title, i) => (
						<Fragment key={i}>
							{title.highlighted ? (
								<span className="text-secondary">
									{title.text}
								</span>
							) : (
								title.text
							)}
						</Fragment>
					))}
				</h1>
				<div className="lg:mt-16 mt-8 flex lg:gap-16 gap-8">
					{heroTags.map((tag, i) => (
						<div key={i}>
							<p className="text-secondary_dark text-xl lg:text-lg-xl font-medium">
								{tag.value}
							</p>
							<p className="uppercase lg:text-sm text-xs">
								{tag.text}
							</p>
						</div>
					))}
				</div>
				{heroVideo && (
					<div className="flex gap-8 mt-8 items-center">
						<div className="flex-grow h-0.5 bg-white bg-opacity-25">
							<div
								ref={videoPlayBarRef}
								className="bg-white bg-opacity-50 w-full origin-left h-full"
							></div>
						</div>
						<button
							onClick={pauseVideo}
							className="border-2 border-white p-2 rounded-full font-medium text-sm hover:text-primary hover:border-primary active:scale-90 transition-all"
						>
							{isPlaying ? <MdPause /> : <MdPlayArrow />}
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default HeroClient;
