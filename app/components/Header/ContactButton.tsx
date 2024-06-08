import Link from 'next/link';

const ContactButton = () => {
	return (
		<Link
			href="/contact"
			className="hidden lg:block border-2 border-text py-2 px-6 rounded-full font-medium text-sm hover:text-primary hover:border-primary transition-colors"
		>
			Kontakta mig
		</Link>
	);
};

export default ContactButton;
