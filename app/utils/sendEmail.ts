import { EmailProps } from '../interfaces/Email';

const sendEmail = async (data: EmailProps) => {
	try {
		const res = await fetch('/api/email', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		const json = await res.json();
		alert(json.message);
	} catch (error) {
		console.error(error);
	}
};

export default sendEmail;
