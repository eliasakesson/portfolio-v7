import { useEffect, useState } from 'react';
import getHeader from '../utils/getHeader';
import { HeaderProps } from '../interfaces/Header';

const useHeaderProps = () => {
	const [header, setHeader] = useState<HeaderProps>({
		name: 'Header',
		navigation: []
	});

	useEffect(() => {
		const fetchHeader = async () => {
			const header = await getHeader();
			setHeader(header);
		};

		fetchHeader();
	}, []);

	return header;
};

export default useHeaderProps;
