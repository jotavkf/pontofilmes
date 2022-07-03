import { useState } from 'react';
import axios from 'axios';

function Searchbar({ setFilmes, fetchFilmes }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();
		searchFilme();
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	async function searchFilme() {
		if (searchTerm === '') {
			fetchFilmes();
		}
		try {
			const result = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR&query=${searchTerm}`
			);
			setFilmes(result.data.results);
			setSearchTerm('');
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<form onSubmit={handleOnSubmit} className='relative'>
			<input
				type='search'
				className='transition duration-500 ease-in-out hover:bg-slate-300 block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-md border border-solid border-gray-300 focus:text-gray-700 focus:bg-slate-100 focus:border-indigo-700 focus:outline-none'
				placeholder='Pesquise seu filme'
				value={searchTerm}
				onChange={handleOnChange}
			/>
			<button
				type='submit'
				className='text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
				<svg
					className='w-5 h-5 text-white stroke-2'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
				</svg>
			</button>
		</form>
	);
}

export default Searchbar;
