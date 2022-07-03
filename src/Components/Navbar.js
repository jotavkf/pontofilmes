import {
	SearchIcon,
	HeartIcon,
	ShoppingCartIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar({
	setIsVisibleCart,
	setIsVisibleFavs,
	setIsVisibleSearch,
	cart,
	setFilmes,
	fetchFilmes,
}) {
	return (
		<nav className='flex h-20 justify-between items-center font-poppins bg-gradient-to-r from-indigo-500 to-sky-500 mx-auto max-w-full px-2'>
			<Link to='/'>
				<span className='ml-1 p-2 shadow-md text-2xl font-bold text-white tracking-widest px-2 bg-gradient-to-r from-orange-400 to-amber-300'>
					Ponto Filmes
				</span>
			</Link>
			<div className='hidden sm:block xl:w-96'>
				<Searchbar setFilmes={setFilmes} fetchFilmes={fetchFilmes} />
			</div>
			<div className=' inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
				<button
					type='button'
					className='sm:hidden id="menu-button" aria-expanded="true" aria-haspopup="true" mr-4 bg-gray-100 p-1 rounded-full text-gray-500 focus:outline-none focus:ring-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
					onClick={() => setIsVisibleSearch(true)}>
					<SearchIcon className='p-0.5 h-6 w-6' aria-hidden='true' />
				</button>
				<button
					type='button'
					className='bg-gray-100 p-1 rounded-full text-red-400 hover:text-red-300 focus:outline-none focus:ring-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
					onClick={() => setIsVisibleFavs(true)}>
					<HeartIcon className='h-6 w-6' aria-hidden='true' />
				</button>
				<button
					type='button'
					className={`flex ml-4 bg-gray-100 p-1 rounded-full text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-white transform hover:-translate-y-1 hover:scale-110 ${
						cart.length > 0 ? `motion-safe:animate-bounce` : ``
					}`}
					onClick={() => setIsVisibleCart(true)}>
					<ShoppingCartIcon className='p-0.5 h-6 w-6' aria-hidden='true' />
					{cart.length > 0 && <span className='px-2'>{cart.length}</span>}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
