import Image from 'next/image';
import Link from 'next/link';
import Underline from './Underline';

export default function Footer() {
	return (
		<footer className="bg-text text-text_light_hover">
			<div className="mx-auto max-w-8xl px-8 ">
				<div className="grid gap-8 py-16 sm:grid-cols-2 md:gap-16 lg:grid-cols-4">
					<div className="space-y-12 sm:col-span-2">
						<div className="relative h-12 w-12">
							<Image
								src="/images/logo.png"
								alt="TRÄSMAK"
								width={48}
								height={48}
							/>
						</div>
						<p>
							Jag heter Elias Åkesson och är en 18-årig fullstack
							utvecklare från Småland. Jag har en passion för
							webbutveckling och design och har skapat denna sida
							för att dela med mig av mina projekt och
							erfarenheter.
						</p>
					</div>
					<div className="lg:space-y-8 space-y-4">
						<h3 className="text-lg font-semibold">Navigation</h3>
						<nav>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="group relative pb-0.5"
									>
										Hem
										<Underline reverse white />
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="lg:space-y-8 space-y-4">
						<h3 className="text-lg font-semibold">Kontakt</h3>
						<div className="flex flex-col gap-2">
							<a href="mailto:akessonelias@gmail.com">
								<span className="text-secondary hover:text-secondary_dark">
									akessonelias@gmail.com
								</span>
							</a>
							<a href="tel:0761658629">
								<span className="text-secondary hover:text-secondary_dark">
									076-165 86 29
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col-reverse items-center justify-center gap-2 border-t border-t-muted py-4 sm:flex-row">
					<p className="text-muted text-xs">
						© 2024. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
