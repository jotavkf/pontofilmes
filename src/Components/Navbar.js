import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import mySvg from "../Imagens/blob.svg";

function Navbar({ setIsVisibleCart, filmesCarrinho }) {
  return (
    <nav
      className='container flex h-16 justify-between items-center font-poppins bg-gradient-to-r from-indigo-500 to-sky-500 mx-auto max-w-full sm: px-3'
      role='navigation'
    >
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
      <div className='flex xl:w-96'>
        <div className='input-group relative  w-full'>
          <input
            type='search'
            className='form-control relative min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Pesquise seu filme'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
        </div>
      </div>
      <div className=' inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
        <button
          type='button'
          className='bg-gray-100 p-1 rounded-full text-red-400 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out'
        >
          <span className='sr-only'>Filmes favoritos</span>
          <HeartIcon
            className='h-6 w-6 hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
        <button
          type='button'
          className='flex ml-4 bg-gray-100 p-1 rounded-full text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
          onClick={() => setIsVisibleCart(true)}
        >
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
