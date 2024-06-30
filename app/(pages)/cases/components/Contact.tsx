import { MdSend } from 'react-icons/md';

const Contact = () => {
	return (
		<div className="bg-trinary">
			<div className="max-w-8xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16">
				<div className="flex flex-col gap-2">
					<h2 className="text-lg font-semibold max-w-[20ch]">
						Vill du veta mer eller vill du komma i kontakt med mig?
					</h2>
					<p className="text-md max-w-[30ch]">
						Tveka inte att kontakta mig!
					</p>
				</div>
				<form className="flex flex-col gap-6">
					<Input
						input={{
							type: 'text',
							name: 'name',
							id: 'name',
							placeholder: 'John Doe'
						}}
						label={{
							children: 'Namn'
						}}
					/>
					<Input
						input={{
							type: 'email',
							name: 'email',
							id: 'email',
							placeholder: 'example@domain.com'
						}}
						label={{
							children: 'E-post'
						}}
					/>
					<Input
						input={{
							type: 'text',
							name: 'subject',
							id: 'subject',
							placeholder: 'Hej, jag har en fråga'
						}}
						label={{
							children: 'Ämne'
						}}
					/>
					<TextArea
						textarea={{
							name: 'message',
							id: 'message',
							placeholder: 'Skriv ditt meddelande här...'
						}}
						label={{
							children: 'Meddelande'
						}}
					/>
					<button
						type="submit"
						className="bg-primary text-white py-3 px-8 w-fit rounded-full flex items-center gap-2"
					>
						Skicka
						<MdSend />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

const Input = ({
	input,
	label
}: {
	input: React.InputHTMLAttributes<HTMLInputElement>;
	label: React.LabelHTMLAttributes<HTMLLabelElement>;
}) => {
	return (
		<div className="relative">
			<label
				htmlFor={input.id}
				className="absolute top-0 left-2 -translate-y-1/2 px-1 bg-trinary text-2xs font-medium text-muted"
			>
				{label.children}
			</label>
			<input
				{...input}
				className="bg-transparent border w-full border-input px-4 py-2 rounded-lg focus:outline-none"
			/>
		</div>
	);
};

const TextArea = ({
	textarea,
	label
}: {
	textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
	label: React.LabelHTMLAttributes<HTMLLabelElement>;
}) => {
	return (
		<div className="relative">
			<label
				htmlFor={textarea.id}
				className="absolute top-0 left-2 -translate-y-1/2 px-1 bg-trinary text-2xs font-medium text-muted"
			>
				{label.children}
			</label>
			<textarea
				{...textarea}
				rows={5}
				className="bg-transparent border w-full border-input px-4 py-2 rounded-lg focus:outline-none"
			/>
		</div>
	);
};
