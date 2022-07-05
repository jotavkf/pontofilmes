import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartContext } from '../Contexts/CartContext';
import Form from '../Components/Form';
import CarrinhoFinal from '../Components/CarrinhoFinal';
import Spinner from '../Components/Spinner';

function Checkout() {
	const { cart, handleRemoveCart, setCart } = useContext(CartContext);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			if (cart.length === 0) {
				navigate('/');
			} else {
				setIsLoading(false);
			}
		}, 1000);
	}, [cart, navigate]);

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && (
				<div className='h-full w-full bg-slate-200 sm:h-screen sm:w-screen'>
					<Toaster />
					<div className='py-5 px-5'>
						<div className='bg-gray-100 p-10 rounded-md shadow-md w-full'>
							<h1 className='object-contain text-regular md:text-2xl lg:text-3xl font-semibold font-poppins text-left'>
								Checkout
							</h1>
							<div className='flex flex-col md:flex-row justify-between items-center'>
								<Form cart={cart} setCart={setCart} />
								<div className='flex items-center flex-col bg-gray-200 m-4 p-10 rounded-md shadow-md w-full h-full'>
									<h1 className='text-xl font-poppins font-semibold text-sky-600'>
										Carrinho
									</h1>
									<CarrinhoFinal
										className='m-2'
										cart={cart}
										handleRemoveCart={handleRemoveCart}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Checkout;
