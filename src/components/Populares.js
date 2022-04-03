import useFetchPeliculas from "../hooks/useFetchPeliculas";
import TarjetaPeliculas from "./TarjetaPeliculas";
import "../styles/_TarjetaPeliculas.scss";
import "../styles/_UltimosLanzamientos.scss";
const Populares = () => {
	const categoria = "popular";
	const objetoPeliculas = useFetchPeliculas(categoria);
	return (
		<main>
			<h2>Peliculas Populares</h2>
			<div className="contenedor-tarjetas-peliculas">
				{objetoPeliculas.peliculas.map((pelicula) => (
					<TarjetaPeliculas
						key={pelicula.id}
						titulo={pelicula.title}
						imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
						link={`/movie/${pelicula.id}`}
					/>
				))}
			</div>
		</main>
	);
};
export default Populares;
