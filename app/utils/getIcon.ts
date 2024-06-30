import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';

export const getIcon = (icon: string) => {
	const icons = {
		...MdIcons,
		...FaIcons,
		...SiIcons
	};

	const Icon = (icons as any)[icon];

	if (!Icon) return icons.MdWeb as IconType;

	return Icon as IconType;
};
