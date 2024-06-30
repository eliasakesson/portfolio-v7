const Underline = ({
	reverse = false,
	white = false
}: {
	reverse?: boolean;
	white?: boolean;
}) => {
	return (
		<span
			className={`${
				reverse
					? 'animate-underline-in group-hover:animate-underline-out'
					: 'group-hover:animate-underline-in animate-underline-out'
			} transition-all duration-150 absolute h-0.5 ${
				white ? 'bg-white' : 'bg-black'
			} left-0 right-0 bottom-0`}
		></span>
	);
};

export default Underline;
