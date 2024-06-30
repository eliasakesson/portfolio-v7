'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageHoverVideo = ({
	image,
	video
}: {
	image: string;
	video?: string;
}) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className="relative w-full aspect-video"
			onMouseEnter={() => video && setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{video && (
				<AnimatePresence>
					{hover && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<video
								className="rounded-md object-cover"
								autoPlay
								loop
								muted
								playsInline
								src={video}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			)}
			<AnimatePresence>
				{!hover && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={image}
							alt="image"
							fill
							className="object-cover rounded-md"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ImageHoverVideo;
