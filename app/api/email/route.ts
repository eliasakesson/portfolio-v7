import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
	const { email, name, message } = await req.json();

	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NEXT_PUBLIC_EMAIL_USER,
			pass: process.env.NEXT_PUBLIC_EMAIL_PASS
		}
	});

	const mailOptions: Mail.Options = {
		from: process.env.NEXT_PUBLIC_EMAIL_USER,
		to: process.env.NEXT_PUBLIC_EMAIL_USER,
		subject: `Message from ${name} (${email})`,
		text: message
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve('Email sent');
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: 'Email sent' });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
