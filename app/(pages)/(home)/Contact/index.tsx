import { getContactProps } from '@/app/utils/getLandingPage';
import ContactForm from './ContactForm';

const Contact = async () => {
	const { contactTitle, contactText } = await getContactProps();

	return (
		<section className="bg-bg w-full" id="contact">
			<div className="max-w-8xl mx-auto px-8 py-16 lg:py-32 flex lg:flex-row flex-col gap-16">
				<div className="flex-grow flex flex-col gap-8">
					<h2 className="text-xl lg:text-lg-xl font-medium">
						{contactTitle}
					</h2>
					<p className="text-md max-w-[40ch]">{contactText}</p>
				</div>
				<div className="flex-grow">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
