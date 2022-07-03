import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';

function Idfilme() {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [filmePelaId, setFilmePelaId] = useState();

	useEffect(() => {
		async function fetchPelaId() {
			try {
				const result = await axios.get(
					`https://api.themoviedb.org/3/movie/${params.id}?api_key=fa812ced39c01ea176a7307b834faa7d&language=pt-BR`
				);
				setFilmePelaId(result.data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchPelaId();
	}, [isLoading, params.id]);

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && <div>Oi {filmePelaId.title}</div>}
		</>
	);
}

export default Idfilme;
