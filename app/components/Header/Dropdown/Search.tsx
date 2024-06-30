import { useEffect, useMemo, useState } from 'react';
import { DropdownRight } from '.';
import { MdSearch, MdTextFields } from 'react-icons/md';
import Fuse from 'fuse.js';
import { HiFolder, HiLanguage } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { useRouter } from 'next/navigation';
import useHeaderContext from '@/app/hooks/useHeaderContext';
import { CaseProps } from '@/app/interfaces/Case';
import { getCases } from '@/app/utils/getCase';
import Link from 'next/link';

type Suggestion = {
	text: string;
	type: string;
	url?: string;
};

const Search = () => {
	const [cases, setCases] = useState<CaseProps[]>([]);

	useEffect(() => {
		const fetchCases = async () => {
			const cases = await getCases();
			setCases(cases);
		};

		fetchCases();
	}, []);

	const router = useRouter();
	const [search, setSearch] = useState<string>('');
	const [activeTags, setActiveTags] = useState<string[]>([]);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
		useState<number>(0);

	const { setActiveDropdown } = useHeaderContext();

	const getFuzzySearchResults = () => {
		const validTags = tags.filter(tag => !activeTags.includes(tag));

		const list = [
			...validTags.map(tag => ({ text: tag, type: 'Tag' })),
			...cases.map(c => ({
				...c,
				text: c.title,
				url: c.slug,
				type: 'Case',
				tags: c.tags
			}))
		];

		const fuse = new Fuse(list, {
			includeScore: true,
			threshold: 0.6,
			keys: [
				{
					name: 'text',
					weight: 0.5
				},
				{
					name: 'tags',
					weight: 2
				},
				{
					name: 'type',
					weight: 1
				}
			]
		});
		return fuse
			.search(search + ' ' + activeTags.join(' '))
			.map(result => result.item);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		setSelectedSuggestionIndex(0);

		if (search.length < 2) {
			setSuggestions([]);
			return;
		}

		const results = getFuzzySearchResults();
		setSuggestions([{ text: search, type: 'Keyword' }, ...results]);
	}, [search]);

	useEffect(() => {
		document.addEventListener('keydown', handleOnKeyDown);

		return () => {
			document.removeEventListener('keydown', handleOnKeyDown);
		};
	}, [search, suggestions]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const selectedSuggestion = suggestions[selectedSuggestionIndex];
		chooseSuggestion(selectedSuggestion);
	};

	const chooseSuggestion = (suggestion: Suggestion) => {
		if (!suggestion) return;

		if (suggestion.type === 'Tag') {
			setActiveTags(prev => [...prev, suggestion.text]);
			setSearch('');
			setSuggestions([]);
			setSelectedSuggestionIndex(0);
		} else if (suggestion.type === 'Case') {
			router.push(`/cases/${suggestion.url}`);
			setActiveDropdown('');
		}
	};

	const addTag = (tag: string) => {
		if (!activeTags.includes(tag)) {
			setActiveTags(prev => [...prev, tag]);
		}
	};

	const removeTag = (tag: string) => {
		setActiveTags(prev => prev.filter(t => t !== tag));
	};

	const handleOnKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			setSelectedSuggestionIndex(prev => (prev + 1) % suggestions.length);
		}
		if (e.key === 'ArrowUp') {
			setSelectedSuggestionIndex(prev => {
				const next = prev - 1;
				return next < 0 ? 0 : next;
			});
		}
	};

	const relevantCases = useMemo(() => {
		if (activeTags.length === 0 && !search) return cases;

		const results = getFuzzySearchResults();
		console.log(results);

		return cases.filter(c => results.some(r => r.text === c.title));
	}, [cases, activeTags]);

	return (
		<DropdownRight noGrid className="bg-white overflow-y-auto p-8">
			<div className="max-w-5xl mx-auto">
				<form
					onSubmit={handleSubmit}
					className="flex gap-4 items-stretch"
				>
					<div className="flex-grow flex items-center rounded-lg overflow-hidden border peer-focus:border-primary">
						{activeTags.length > 0 ? (
							<div className="flex gap-1 items-center py-1 ml-2">
								{activeTags.map((tag, i) => (
									<div
										key={i}
										onClick={() => removeTag(tag)}
										className="group cursor-pointer bg-muted text-white py-1 px-2 rounded-md flex items-center gap-2"
									>
										<div className="relative w-4 h-4">
											<HiLanguage className="absolute group-hover:opacity-0 opacity-100 transition-opacity" />
											<LiaTimesSolid className="absolute group-hover:opacity-100 opacity-0 transition-opacity" />
										</div>
										<span>{tag}</span>
									</div>
								))}
							</div>
						) : (
							<button
								type="submit"
								className="h-3/4 aspect-square flex items-center justify-center ml-2 text-md"
							>
								<MdSearch />
							</button>
						)}
						<input
							type="text"
							placeholder="Sök efter något..."
							value={search}
							onChange={handleSearchChange}
							className="focus:outline-none py-3 px-2 flex-grow"
							autoFocus
						/>
					</div>
					<button
						type="submit"
						className="px-8 bg-primary py-auto text-white text-md rounded-lg"
					>
						Sök
					</button>
				</form>
				<div className="border rounded-lg p-4 mt-4">
					{search.length >= 2 ? (
						<ul>
							{suggestions.map((suggestion, i) => (
								<li
									key={i}
									onClick={() => chooseSuggestion(suggestion)}
									className={`flex items-center gap-2 px-3 py-2 rounded-md ${
										selectedSuggestionIndex === i
											? 'bg-trinary_light'
											: 'hover:bg-trinary_light'
									}`}
								>
									<div className="bg-trinary h-full p-2 text-lg rounded-md">
										<MdTextFields />
									</div>
									<div>
										<span className="text-2xs">
											{suggestion.type}
										</span>
										<p className="text-md font-medium">
											{suggestion.text}
										</p>
									</div>
								</li>
							))}
						</ul>
					) : (
						<div className="flex flex-col gap-8">
							<div>
								<p className="text-base mb-2 font-medium">
									Teknologier
								</p>
								<div className="grid grid-cols-4 gap-2">
									{technologies.map((tag, i) => (
										<div
											key={i}
											onClick={() => addTag(tag)}
											className={`${
												activeTags.includes(tag)
													? 'bg-trinary_dark text-muted'
													: 'cursor-pointer'
											} flex items-center gap-2 bg-trinary hover:bg-trinary_dark transition-colors py-2 px-4 rounded-lg`}
										>
											<HiLanguage />
											<span className="text-sm">
												{tag}
											</span>
										</div>
									))}
								</div>
							</div>
							<div>
								<p className="text-base mb-2 font-medium">
									Kategorier
								</p>
								<div className="grid grid-cols-4 gap-2">
									{categories.map((tag, i) => (
										<div
											key={i}
											onClick={() => addTag(tag)}
											className={`${
												activeTags.includes(tag)
													? 'bg-trinary_dark text-muted'
													: 'cursor-pointer'
											} flex items-center gap-2 bg-trinary hover:bg-trinary_dark transition-colors py-2 px-4 rounded-lg`}
										>
											<HiFolder />
											<span className="text-sm">
												{tag}
											</span>
										</div>
									))}
								</div>
							</div>
							<div>
								<p className="text-base mb-2 font-medium">
									Cases
								</p>
								<div className="grid grid-cols-2 gap-2">
									{relevantCases.map((c, i) => (
										<Link
											href={`/cases/${c.slug}`}
											onClick={() =>
												setActiveDropdown('')
											}
											key={i}
											className="flex items-center gap-4 bg-trinary hover:bg-trinary_dark transition-colors p-2 rounded-lg cursor-pointer"
										>
											<img
												src={c.image}
												className="h-24 rounded-md"
											/>
											<span className="text-base font-medium">
												{c.name}
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</DropdownRight>
	);
};

export default Search;

const technologies = ['React', 'Next.js'];
const categories = ['Webb', 'Mobil', 'Design', 'E-handel', 'App'];
const tags = [...technologies, ...categories];
