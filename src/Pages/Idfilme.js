import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';

function Idfilme() {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [filmePelaId, setFilmePelaId] = useState();

	useEffect(() => {
		async function fetchPelaId() {
			try {
				const filme = await axios.get(
					`https://api.themoviedb.org/3/movie/${params.id}?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR`
				);
				const trailer = await axios.get(
					`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR`
				);
				const reviews = await axios.get(
					`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR`
				);
				setFilmePelaId({
					filme: filme.data,
					trailer: trailer.data.results,
					reviews: reviews.data.results,
				});
				console.log(filmePelaId);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchPelaId();
	}, [isLoading, params.id, filmePelaId]);

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<div className='font-poppins p-2 h-full w-full bg-gradient-to-b from-blue-500 to-cyan-500 sm:h-screen sm:w-screen'>
						<div className='bg-slate-300 rounded-md shadow-md'>
							<Link
								to='/'
								className='text-xs text-blue-600 font-bold top-5 left-5 absolute'>
								{' '}
								Retornar
							</Link>
							<h1 className='pt-10 text-2xl font-semibold italic text-center'>
								{filmePelaId.filme.title}
							</h1>
							<div className='flex flex-col sm:flex-row justify-betwen items-center my-2 p-4 rounded-md'>
								<div className='shadow-2xl shadow-blue-500/50 bg-slate-100 p-4'>
									<h3 className='text-sm text-sky-700 font-medium'>Trailer</h3>
									<iframe
										src={`https://www.youtube.com/embed/${filmePelaId.trailer[0].key}`}
										className='my-2 h-[180px] aspect-video'
										frameBorder='0'
										allowFullScreen='fullscreen'
										title='trailer'
									/>
								</div>
								<h1 className='pt-2 font-medium'>
									Genêro: {filmePelaId.filme.genres[0].name}
								</h1>
								<div className='bg-slate-100 pt-4 mt-6 flex flex-col h-full w-full'>
									<h1 className='font-medium text-sky-700'>Reviews</h1>
									{filmePelaId.reviews.slice(0, 2).map((review, index) => {
										return (
											<div
												key={`${filmePelaId.filme.id + index}`}
												className='m-4 overflow-auto bg-slate-400/30 h-[150px] p-2 text-blue-400'>
												<h1>Autor: {review.author}</h1>
												<h3>Nota: {review.author_details.rating}</h3>
												<div className='m-2 h-[30px]'>
													<p className='text-xs max-h-[0.5rem] text-justify'>
														Análise: {review.content}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Idfilme;
