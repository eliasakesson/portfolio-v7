import { DropdownItem, DropdownLeft, DropdownRight } from '.';
import Link from 'next/link';
import Underline from '../../Underline';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import { useEffect, useState } from 'react';
import { getCases } from '@/app/utils/getCase';
import { CaseProps } from '@/app/interfaces/Case';
import {
	MdFolder,
	MdFolderOpen,
	MdScreenshot,
	MdScreenshotMonitor,
	MdWeb,
	MdWebAsset
} from 'react-icons/md';
import { IconType } from 'react-icons';
import { SlScreenSmartphone } from 'react-icons/sl';

const About = () => {
	return (
		<>
			<DropdownLeft title="Om mig" text="Lär känna mig" />
			<DropdownRight>
				<DropdownItem
					title="Om mig"
					text="Lär känna mig lite bättre"
					url="/about"
					icon="MdPerson"
				/>
			</DropdownRight>
		</>
	);
};

export default About;
