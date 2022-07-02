import { TrashIcon } from '@heroicons/react/outline';

function carrinhoFinal({ cart, handleRemoveCart }) {
	const img_API = `https://image.tmdb.org/t/p/w300`;

	const soma = (arr) => {
		return arr.reduce((cal, item) => {
			return cal + item.price * item.amount;
		}, 0);
	};

	return (
		<div className='divide-y-4 md:divide-x-4'>
			{cart.map((filme) => (
				<div
					key={filme.id}
					className='p-3 bg-white rounded-md text-center h-full w-full flex flex-col items-center md:flex-row'>
					<img
						className='mt-3 h-[70px]'
						src={img_API + filme.poster_path}
						alt={filme.title}
					/>
					<div className='p-6 flex flex-col w-full items-center md:space-evenly md:flex-row'>
						<h3 className='m-1 font-sans font-light text-sm text-center'>
							{filme.title}
						</h3>
						<p className='m-2 font-semibold tracking-wider text-amber-400'>
							R$ {filme.price}
						</p>
						<button onClick={() => handleRemoveCart(filme.id)}>
							<TrashIcon className='m-2 h-5 w-5' />
						</button>
						<h4 className='text-lg text-slate-100 font-regular w-8 bg-sky-600 rounded-lg'>
							{filme.amount}
						</h4>
					</div>
				</div>
			))}
			<p className='font-semibold'>
				Total:
				<span className='font-bold text-amber-500 ml-1 '>R$ {soma(cart)}</span>
			</p>
		</div>
	);
}

export default carrinhoFinal;
