import {
	SearchIcon,
	HeartIcon,
	ShoppingCartIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import mySvg from '../Imagens/blob.svg';
import Searchbar from './Searchbar';

function Navbar({
	setIsVisibleCart,
	setIsVisibleFavs,
	filmesCarrinho,
	setFilmes,
	fetchFilmes,
	setIsVisibleSearch,
}) {
	return (
		<nav
			className='container flex h-16 justify-between items-center font-poppins bg-gradient-to-r from-indigo-500 to-sky-500 mx-auto max-w-full sm: px-3'
			role='navigation'>
			<div className='flex'>
				<div className='flex-shrink-0 flex items-center'>
					<Link to='/'>
						<img
							className='block w-20'
							src={mySvg}
							alt='Logo da Ponto Filmes'
						/>
					</Link>
					<div className='ml-1 hidden lg:block text-3xl font-bold text-slate-100 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300'>
						Ponto Filmes
					</div>
				</div>
			</div>
			<div className='hidden sm:block xl:w-96'>
				<Searchbar setFilmes={setFilmes} fetchFilmes={fetchFilmes} />
			</div>
			<div className=' inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
				<button
					type='button'
					className='sm:hidden id="menu-button" aria-expanded="true" aria-haspopup="true" mr-4 bg-gray-100 p-1 rounded-full text-gray-500 focus:outline-none focus:ring-white transition duration-300 ease-in-out'
					onClick={() => setIsVisibleSearch(true)}>
					<SearchIcon className='p-0.5 h-6 w-6' aria-hidden='true' />
				</button>
				<button
					type='button'
					className='bg-gray-100 p-1 rounded-full text-red-400 hover:text-red-300 focus:outline-none focus:ring-white transition duration-300 ease-in-out'
					onClick={() => setIsVisibleFavs(true)}>
					<HeartIcon
						className='h-6 w-6 hover:animate-pulse'
						aria-hidden='true'
					/>
				</button>
				<button
					type='button'
					className='flex ml-4 bg-gray-100 p-1 rounded-full text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-white'
					onClick={() => setIsVisibleCart(true)}>
					<ShoppingCartIcon className='p-0.5 h-6 w-6' aria-hidden='true' />
					{filmesCarrinho.length > 0 && (
						<span className='px-2'>{filmesCarrinho.length}</span>
					)}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
