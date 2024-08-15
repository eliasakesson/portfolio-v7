import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppWrapper from './context';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Elias Åkesson | Fullstack Utvecklare',
	description:
		'Portfolio för Elias Åkesson, en fullstack utvecklare som är specialiserad på React och Node.js.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AppWrapper>
				<body className={`${inter.className} bg-white text-text`}>
					<Header />
					{children}
					<Footer />
				</body>
			</AppWrapper>
		</html>
	);
}
