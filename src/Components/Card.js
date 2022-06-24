import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";

function Card({ filme, handleAddCarrinho, toast, handleAddFavs }) {
  const img_API = `https://image.tmdb.org/t/p/w1280`;

  return (
    <div className='group relative w-60 m-2 bg-sky-400 rounded-md shadow-md overflow-hidden'>
      <img
        className='w-max'
        src={img_API + filme.poster_path}
        alt={filme.title}
      />
      <div className='font-poppins flex justify-between p-2 items-center text-slate-100'>
        <h3 className='font-semibold text-left'>{filme.title}</h3>
        <span className='backdrop-contrast-50 rounded-md shadow-md m-1 p-1'>
          {filme.vote_average}
        </span>
      </div>
      <div>
        <div className='translate-y-full group-hover:translate-y-0 transition-transform ease-in text-justify font-sans backdrop-blur-md bg-black/30 absolute bottom-0 left-0 right-0 text-white text-xs p-3'>
          <h1 className='font-bold text-left mb-2'>Sinopse:</h1>
          {filme.overview}
          <h1 className='font-bold text-left my-4 flex justify-between'>
            Preço: R$ 79
            <button
              type='button'
              className='text-red-400'
              onClick={() => {
                handleAddFavs(filme);
                toast("Adicionado aos favoritos!", { icon: "❤️" });
              }}
            >
              <HeartIcon className='h-4 w-4' />
            </button>
          </h1>
          <button
            type='button'
            className='w-full block mt-2 px-4 py-2 bg-sky-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out flex justify-around align-center'
            onClick={() => {
              handleAddCarrinho(filme);
              toast.success("Adicionado ao carrinho!");
            }}
          >
            <ShoppingCartIcon className='h-4 w-4' />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
