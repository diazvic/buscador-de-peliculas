import useFetchPeliculas from "../hooks/useFetchPeliculas";
import ListaItemPelicula from "./ListaItemPelicula";
import "../styles/_ListaPeliculas.scss";

const ListaPeliculas = ({ titulo, categoria }) => {
	const objetoPeliculas = useFetchPeliculas(categoria);

	return (
		<div className="contenedor-lista-peliculas">
			<div className="titulo">
				<h2>{titulo}</h2>
			</div>
			{objetoPeliculas.peliculas.map((pelicula) => (
				<div className="contenedor-peliculas" key={pelicula.id}>
					<ListaItemPelicula
						titulo={pelicula.title}
						imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
						link={`/${pelicula.id}`}
					/>
				</div>
			))}
		</div>
	);
};

export default ListaPeliculas;
//aca pasarle otro componente por ej : listaitempelicula
