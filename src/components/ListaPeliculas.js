import useFetchPeliculas from "../hooks/useFetchPeliculas";
import ListaItemPelicula from "./ListaItemPelicula";
import "../styles/_ListaPeliculas.scss";

const ListaPeliculas = ({ titulo, peliculas }) => {
	return (
		<div className="contenedor-lista-peliculas">
			<h2>{titulo}</h2>
			{peliculas.map((pelicula) => (
				<div className="contenedor-peliculas" key={pelicula.id}>
					<ListaItemPelicula
						titulo={pelicula.title}
						imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
						link={`/movie/${pelicula.id}`}
					/>
				</div>
			))}
		</div>
	);
};

export default ListaPeliculas;
