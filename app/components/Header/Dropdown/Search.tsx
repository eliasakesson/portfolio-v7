import { useEffect, useMemo, useState } from 'react';
import { DropdownRight } from '.';
import { MdTextFields } from 'react-icons/md';
import Fuse from 'fuse.js';

const Search = () => {
	const [search, setSearch] = useState<string>('');
	const [activeTags, setActiveTags] = useState<string[]>([]);
	const [suggestions, setSuggestions] = useState<
		{ text: string; type: string }[]
	>([]);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
		useState<number>(0);

	const list = useMemo(() => {
		const validTags = tags.filter(tag => !activeTags.includes(tag));

		return [
			...validTags.map(tag => ({ text: tag, type: 'Tag' })),
			...cases.map(c => ({ text: c, type: 'Case' }))
		];
	}, [tags, activeTags]);

	const fuse = new Fuse(list, {
		includeScore: true,
		threshold: 0.5,
		keys: ['text']
	});

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		setSelectedSuggestionIndex(0);

		if (e.target.value.length < 2) {
			setSuggestions([]);
			return;
		}

		const results = fuse.search(e.target.value).map(result => result.item);
		setSuggestions([{ text: e.target.value, type: 'Keyword' }, ...results]);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleOnKeyDown);

		return () => {
			document.removeEventListener('keydown', handleOnKeyDown);
		};
	}, [search, suggestions]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (selectedSuggestionIndex === 0) {
			console.log('Search for keyword:', search);
		} else {
			console.log(
				'Search for suggestion:',
				suggestions[selectedSuggestionIndex].text
			);
			const selectedSuggestion = suggestions[selectedSuggestionIndex];
			if (selectedSuggestion.type === 'Tag') {
				setActiveTags(prev => [...prev, selectedSuggestion.text]);
				setSearch('');
				setSuggestions([]);
				setSelectedSuggestionIndex(0);
			}
		}
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

	return (
		<DropdownRight className="bg-white">
			<div className="max-w-5xl mx-auto py-24">
				<form
					onSubmit={handleSubmit}
					className="flex gap-4 items-center"
				>
					<div className="flex-grow flex rounded-lg overflow-hidden border border-gray-200 peer-focus:border-primary">
						<div className="flex gap-2 items-center p-1">
							{activeTags.map((tag, i) => (
								<div
									key={i}
									className="bg-muted text-white p-1 rounded-md flex items-center gap-2"
								>
									<span>{tag}</span>
								</div>
							))}
						</div>
						<input
							type="text"
							placeholder="Sök efter något..."
							value={search}
							onChange={handleSearchChange}
							className="focus:outline-none py-2 px-2 flex-grow"
						/>
					</div>
					<button className="py-2 px-8 bg-primary text-white rounded-lg">
						Sök
					</button>
				</form>
				{search.length >= 2 && (
					<ul className="mt-4">
						{suggestions.map((suggestion, i) => (
							<li
								key={i}
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
				)}
			</div>
		</DropdownRight>
	);
};

export default Search;

const tags = ['React', 'Next.js'];
const cases = ['Träsmak UF'];
