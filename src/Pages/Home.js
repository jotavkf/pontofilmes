import Card from '../Components/Card';
import Cart from '../Components/Cart';
import Favs from '../Components/Favs';
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import Searchbar from '../Components/Searchbar';

function Home() {
	const [filmes, setFilmes] = useState([]);
	const [render, setRender] = useState(true);
	const [filmesCarrinho, setFilmesCarrinho] = useState([]);
	const [filmesFavs, setFilmesFavs] = useState([]);
	const [isVisibleCart, setIsVisibleCart] = useState(false);
	const [isVisibleFavs, setIsVisibleFavs] = useState(false);
	const [isVisibleSearch, setIsVisibleSearch] = useState(false);

	async function fetchFilmes() {
		try {
			const result = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR&page=1`
			);
			setFilmes(result.data.results);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchFilmes();
		setRender(false);
	}, [render]);

	const handleAddFavs = (filme) => {
		setFilmesFavs((prev) => {
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

	const handleRemoveFavs = (id) => {
		setFilmesFavs((prev) => {
			return prev.reduce((cal, item) => {
				if (item.id === id) {
					if (item.amount === 1) return cal;

					return [...cal, { ...item, amount: item.amount - 1 }];
				}

				return [...cal, { ...item }];
			}, []);
		});
	};

	const handleAddCarrinho = (filme) => {
		setFilmesCarrinho((prev) => {
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

	const handleRemoveCarrinho = (id) => {
		setFilmesCarrinho((prev) => {
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
		<div>
			<Navbar
				filmesCarrinho={filmesCarrinho}
				setIsVisibleCart={setIsVisibleCart}
				setIsVisibleFavs={setIsVisibleFavs}
				setIsVisibleSearch={setIsVisibleSearch}
				setFilmes={setFilmes}
				fetchFilmes={fetchFilmes}
				toast={toast}
			/>
			<Toaster />
			<div className='relative h-full bg-slate-300'>
				<div className='flex flex-wrap justify-center items-center'>
					{filmes.map((filme) => {
						return (
							<Card
								key={filme.id}
								filme={filme}
								handleAddCarrinho={handleAddCarrinho}
								handleAddFavs={handleAddFavs}
								toast={toast}
							/>
						);
					})}
					{isVisibleSearch && (
						<div
							className='fixed inset-0 backdrop-contrast-50 flex items-center align-center justify-center'
							onClick={() => setIsVisibleSearch(false)}>
							<div
								className='bg-white w-[300px] overflow-y-scroll animate-fade-in'
								onClick={(e) => e.stopPropagation()}>
								<Searchbar setFilmes={setFilmes} fetchFilmes={fetchFilmes} />
							</div>
						</div>
					)}
					{isVisibleCart && (
						<Cart
							setIsVisibleCart={setIsVisibleCart}
							setFilmesCarrinho={setFilmesCarrinho}
							filmesCarrinho={filmesCarrinho}
							handleAddCarrinho={handleAddCarrinho}
							handleRemoveCarrinho={handleRemoveCarrinho}
							toast={toast}
						/>
					)}
					{isVisibleFavs && (
						<Favs
							setIsVisibleFavs={setIsVisibleFavs}
							filmesFavs={filmesFavs}
							handleAddCarrinho={handleAddCarrinho}
							handleRemoveFavs={handleRemoveFavs}
							toast={toast}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
