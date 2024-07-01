'use client';

import { EmailProps } from '@/app/interfaces/Email';
import sendEmail from '@/app/utils/sendEmail';
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FieldErrors, Path, UseFormRegister, useForm } from 'react-hook-form';
import { MdEmail, MdPerson, MdSubject } from 'react-icons/md';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';

const ContactForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<EmailProps>();

	return (
		<form className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
			<Input
				name="name"
				label="För- & Efternamn"
				placeholder="Daniel Svensson"
				icon={<MdPerson />}
				type="text"
				register={register}
				errors={errors}
			/>
			<Input
				name="email"
				label="Email"
				placeholder="daniel.svensson@gmail.com"
				icon={<MdEmail />}
				type="email"
				register={register}
				errors={errors}
			/>
			<Input
				name="subject"
				label="Ämne"
				placeholder="Jobberbjudande som ..."
				icon={<MdSubject />}
				type="text"
				register={register}
				errors={errors}
			/>
			<Textarea
				name="message"
				label="Meddelande"
				placeholder="Hej! Jag ..."
				id=""
				rows={10}
				register={register}
				errors={errors}
			></Textarea>
			<button
				type="submit"
				className="bg-primary hover:bg-primary_dark active:scale-90 transition-colors text-white py-4 px-16 rounded-full"
			>
				Skicka
			</button>
		</form>
	);
};

export default ContactForm;

const Input = ({
	label,
	icon,
	register,
	name,
	errors,
	...props
}: InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	icon: React.ReactNode;
	name: Path<EmailProps>;
	errors: FieldErrors<EmailProps>;
	register: UseFormRegister<EmailProps>;
}) => {
	const fullConfig = resolveConfig(tailwindConfig);

	return (
		<div>
			<label htmlFor={props.id} className="text-xs font-medium">
				{label}
			</label>
			<div
				style={
					errors[name]
						? { borderColor: fullConfig.theme.colors.red['700'] }
						: {}
				}
				className="border border-input rounded-md flex items-center pl-3"
			>
				{icon}
				<input
					{...props}
					className={`${props.className} bg-transparent py-2 px-4 focus:outline-none w-full`}
					aria-invalid={errors[name] ? 'true' : 'false'}
					{...register(name, { required: true })}
				/>
			</div>
		</div>
	);
};

const Textarea = ({
	label,
	name,
	register,
	errors,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label: string;
	name: Path<EmailProps>;
	errors: FieldErrors<EmailProps>;
	register: any;
}) => {
	const fullConfig = resolveConfig(tailwindConfig);

	return (
		<div>
			<label htmlFor={props.id} className="text-xs font-medium">
				{label}
			</label>
			<textarea
				{...props}
				style={
					errors[name]
						? { borderColor: fullConfig.theme.colors.red['700'] }
						: {}
				}
				className={`${props.className} border border-input rounded-md bg-transparent p-4 focus:outline-none w-full`}
				{...register(name, { required: true })}
			/>
		</div>
	);
};
