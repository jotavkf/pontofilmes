import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/solid';
import toast from 'react-hot-toast';

function Favs({
	filmesFavs,
	setIsVisibleFavs,
	handleAddCart,
	handleRemoveFavs,
}) {
	const img_API = `https://image.tmdb.org/t/p/w300`;

	return (
		<div
			className='fixed inset-0 backdrop-contrast-50'
			onClick={() => setIsVisibleFavs(false)}>
			<div
				className='bg-white w-[250px] h-full absolute right-0 overflow-y-scroll animate-fade-in'
				onClick={(e) => e.stopPropagation()}>
				<div className='bg-red-400 p-4 text-center text-white flex justify-between'>
					<p>Favoritos</p>
				</div>
				<div className='flex flex-col items-center p-4'>
					{filmesFavs.map((filme) => (
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
									<button
										onClick={() => {
											handleAddCart(filme);
											toast.success('Adicionado ao carrinho');
										}}>
										<ShoppingCartIcon className='h-5 w-5' />
									</button>
									<button
										onClick={() => {
											handleRemoveFavs(filme.id);
											toast.error('Removido dos favoritos');
										}}>
										<TrashIcon className='h-5 w-5' />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Favs;
