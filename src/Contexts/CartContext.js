import { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const handleAddCart = (filme) => {
		setCart((prev) => {
			const findFilmeInCart = prev.find((item) => item.id === filme.id);

			if (findFilmeInCart) {
				return prev.map((item) =>
					item.id === filme.id
						? { ...item, amount: item.amount + 1, price: 79 } // Integrando um valor aleatório ao adicionar no carrinho dado que a API não entrega um preço
						: item
				);
			}

			return [...prev, { ...filme, amount: 1, price: 79 }];
		});
	};

	const handleRemoveCart = (id) => {
		setCart((prev) => {
			return prev.reduce((cal, item) => {
				if (item.id === id) {
					if (item.amount === 1) return cal;

					return [...cal, { ...item, amount: item.amount - 1 }];
				}

				return [...cal, { ...item }];
			}, []);
		});
	};

	return (
		<CartContext.Provider
			value={{ cart, handleAddCart, handleRemoveCart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}
