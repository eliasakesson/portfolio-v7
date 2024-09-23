import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppWrapper from './context';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

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
		<html lang="sv">
			<Script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="a3274aa8-e962-442b-bc5c-50ac241129af"
			></Script>
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
