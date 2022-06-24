import { TrashIcon } from "@heroicons/react/outline";

function carrinhoFinal({ carrinho, handleRemoveCarrinho }) {
  const img_API = `https://image.tmdb.org/t/p/w300`;

  const soma = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };

  return (
    <div>
      {carrinho.map((filme) => (
        <div
          key={filme.id}
          className='m-4 p-4 bg-white rounded-md text-center border-b-[3px] h-auto w-full flex flex-col items-center md:flex-row md:justify-between'
        >
          <img
            className='h-[70px]'
            src={img_API + filme.poster_path}
            alt={filme.title}
          />
          <div className='container flex flex-col pt-2 items-center'>
            <h3 className='font-sans font-light text-sm text-center'>
              {filme.title}
            </h3>
            <p className='font-semibold tracking-wider text-amber-400'>
              R$ {filme.price}
            </p>
          </div>
          <div className='flex items-center'>
            <button onClick={() => handleRemoveCarrinho(filme.id)}>
              <TrashIcon className='h-5 w-5' />
            </button>
            <h4 className='ml-2 text-lg text-slate-100 font-regular w-7 h-7 bg-sky-600 rounded-lg'>
              {filme.amount}
            </h4>
          </div>
        </div>
      ))}
      <p className='font-semibold'>
        Total:
        <span className='font-bold text-amber-500 ml-5'>
          R$ {soma(carrinho)}
        </span>
      </p>
    </div>
  );
}

export default carrinhoFinal;
