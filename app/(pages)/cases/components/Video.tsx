'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import { RiRewindStartFill } from 'react-icons/ri';

const Video = ({ video }: { video: string }) => {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		videoRef.current?.addEventListener('ended', () => {
			setPlaying(false);
		});

		return () => {
			videoRef.current?.removeEventListener('ended', () => {
				setPlaying(false);
			});
		};
	}, [videoRef]);

	useEffect(() => {
		if (playing) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
	}, [playing]);

	const rewindVideo = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
		}

		setPlaying(true);
	};

	return (
		<>
			<div className="max-w-8xl mx-auto lg:mt-32 mt-16 mb-8 lg:mb-16 pr-8 lg:px-8">
				<div className="relative lg:rounded-xl rounded-r-xl overflow-hidden">
					<video
						ref={videoRef}
						className="object-cover"
						muted
						src={video}
					/>
					<AnimatePresence>
						{playing && (
							<motion.button
								onClick={() => setPlaying(false)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute flex items-center gap-2 bottom-4 left-4 text-sm lg:text-md bg-black text-text_light bg-opacity-60 px-6 py-3 rounded-full hover:bg-opacity-100"
							>
								Pausa
								<MdPause />
							</motion.button>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{!playing && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 flex items-center"
							>
								<div className="lg:px-40 px-8">
									<p className="text-md font-semibold text-secondary_dark mt-2">
										Video
									</p>
									<h3 className="text-lg lg:text-lg-xl font-medium text-text_light">
										Kolla på videon
									</h3>
									<div className="flex gap-2 lg:mt-8 mt-4">
										<button
											onClick={() => setPlaying(true)}
											className="bg-primary hover:bg-primary_dark transition-colors text-text_light text-sm lg:text-md px-4 py-2 lg:px-6 lg:py-3 rounded-full flex items-center gap-2"
										>
											Spela upp
											<MdPlayArrow />
										</button>
										<button
											onClick={rewindVideo}
											className="bg-black bg-opacity-75 hover:bg-opacity-100 transition-colors h-full aspect-square lg:p-5 p-3 text-text_light rounded-full"
										>
											<RiRewindStartFill />
										</button>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default Video;
