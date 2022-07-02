import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartContext } from '../Contexts/CartContext';
import Form from '../Components/Form';
import CarrinhoFinal from '../Components/CarrinhoFinal';

function Checkout() {
	const { cart, handleRemoveCart, setCart } = useContext(CartContext);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (cart.length === 0) {
			navigate('/');
		} else {
			setIsLoading(false);
		}
	}, [cart, navigate]);

	return (
		<div>
			<Toaster />
			<div className='h-screen w-screen bg-slate-200'>
				<div className='py-10 px-20'>
					<div className='container bg-gray-100 p-10 rounded-md shadow-md w-full'>
						<h1 className='object-contain text-regular md:text-2xl lg:text-3xl font-semibold font-poppins text-left'>
							Checkout
						</h1>
						<div className='flex flex-col md:flex-row justify-between items-center'>
							<Form cart={cart} setCart={setCart} />
							<div className='container bg-gray-200 m-10 p-10 rounded-md shadow-md'>
								<h1 className='text-xl font-poppins font-semibold text-sky-600 text-left'>
									Carrinho
								</h1>
								<CarrinhoFinal
									cart={cart}
									handleRemoveCart={handleRemoveCart}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
