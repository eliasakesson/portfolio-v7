export interface HeaderProps {
	name: string;
	navigation: HeaderItemProps[];
}

export interface HeaderItemProps {
	title: string;
	url?: string;
	description?: string;
	dropdownItems?: HeaderDropdownItemProps[];
}

export interface HeaderDropdownItemProps {
	title: string;
	text: string;
	icon: string;
	url?: string;
	file?: string;
}
