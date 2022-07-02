import {
	PlusCircleIcon,
	MinusCircleIcon,
	TrashIcon,
} from '@heroicons/react/outline';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

function Carrinho({ setIsVisibleCart, setCart, cart }) {
	const navigate = useNavigate();
	const { handleAddCart, handleRemoveCart } = useContext(CartContext);

	const img_API = `https://image.tmdb.org/t/p/w300`;

	const soma = (arr) => {
		return arr.reduce((cal, item) => {
			return cal + item.price * item.amount;
		}, 0);
	};

	return (
		<div
			className='fixed inset-0 backdrop-contrast-50'
			onClick={() => setIsVisibleCart(false)}>
			<div
				className='bg-white w-[250px] h-full absolute right-0 overflow-y-scroll animate-fade-in'
				onClick={(e) => e.stopPropagation()}>
				<div className='bg-sky-400 p-4 text-center text-white flex justify-between'>
					<p>Carrinho</p>
					<button type='button' onClick={() => setCart([])}>
						<TrashIcon className='h-4 w-4' />
					</button>
				</div>
				<div className='flex flex-col items-center p-4'>
					{cart.map((filme) => (
						<div
							key={filme.id}
							className='text-center p-4 border-b-[3px] w-full flex flex-col items-center justify-between'>
							<img
								className='h-[100px]'
								src={img_API + filme.poster_path}
								alt={filme.title}
							/>
							<div className='container flex flex-col pt-2 items-center'>
								<h3 className='font-sans font-bold text-sm text-center'>
									{filme.title}
								</h3>
								<p className='font-semibold tracking-wider text-sky-400'>
									R$ {filme.price}
								</p>
								<div className='flex wrap items-center'>
									<button onClick={() => handleRemoveCart(filme.id)}>
										<MinusCircleIcon className='h-5 w-5' />
									</button>
									<h4 className='text-lg text-slate-100 font-regular w-7 h-7 bg-sky-600 rounded-lg'>
										{filme.amount}
									</h4>
									<button onClick={() => handleAddCart(filme)}>
										<PlusCircleIcon className='h-5 w-5' />
									</button>
								</div>
							</div>
						</div>
					))}
					{cart.length > 0 && (
						<div>
							<p className=''>
								Total:
								<span className='ml-20 font-bold'>R$ {soma(cart)}</span>
							</p>
							<button
								type='button'
								className='motion-safe:animate-bounce w-full block mt-2 px-4 py-2 bg-sky-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out flex justify-around align-center'
								onClick={() => navigate('/checkout')}>
								Finalizar
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Carrinho;
