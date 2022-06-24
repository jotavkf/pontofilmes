import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import mySvg from "../Imagens/blob.svg";
import { useState } from "react";
import axios from "axios";

function Navbar({
  setIsVisibleCart,
  setIsVisibleFavs,
  filmesCarrinho,
  setFilmes,
  fetchFilmes,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchFilme();
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  async function searchFilme() {
    if (searchTerm === "") {
      fetchFilmes();
    }
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR&query=${searchTerm}`
      );
      setFilmes(result.data.results);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  }
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
      <div className='hidden sm:block flex xl:w-96'>
        <div className='input-group relative  w-full'>
          <form onSubmit={handleOnSubmit}>
            <input
              type='search'
              className='form-control relative min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Pesquise seu filme'
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </div>
      <div className=' inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
        <button
          type='button'
          className='id="menu-button" aria-expanded="true" aria-haspopup="true" mr-4 bg-gray-100 p-1 rounded-full text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-white transition duration-300 ease-in-out'
        >
          <SearchIcon
            className='h-6 w-6 hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
        <button
          type='button'
          className='bg-gray-100 p-1 rounded-full text-red-400 hover:text-red-300 focus:outline-none focus:ring-white transition duration-300 ease-in-out'
          onClick={() => setIsVisibleFavs(true)}
        >
          <HeartIcon
            className='h-6 w-6 hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
        <button
          type='button'
          className='flex ml-4 bg-gray-100 p-1 rounded-full text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-white'
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
