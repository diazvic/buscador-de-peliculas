import useFetchPeliculas from "../hooks/useFetchPeliculas";

const ListaPeliculas = ({ titulo, url }) => {
	const peliculas = useFetchPeliculas(url);

	return (
		<div>
			<h2>{titulo}</h2>
			{peliculas.map((pelicula) => (
				//aca pasarle otro componente por ej : listaitempelicula
				// <ListaItemPelicula con una key ={pelicula.id}		titulo={pelicula.title}
				// 				imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
				// 				link={`/${pelicula.id}`} />
				<h3 key={pelicula.id}>{pelicula.title}</h3>
			))}
		</div>
	);
};

export default ListaPeliculas;
