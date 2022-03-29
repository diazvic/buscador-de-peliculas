import useFetchPeliculas from "../hooks/useFetchPeliculas";
import TarjetaPeliculas from "./TarjetaPeliculas";

const UltimosLanzamientos = () => {
	const categoria = "now_playing";
	const objetoPeliculas = useFetchPeliculas(categoria);

	return (
		<div>
			<h2>Ultimos Lanzamientos</h2>
			{objetoPeliculas.peliculas.map((pelicula) => (
				<div className="contenedor-peliculas" key={pelicula.id}>
					<TarjetaPeliculas
						titulo={pelicula.title}
						imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
						link={`/${pelicula.id}`}
					/>
				</div>
			))}
			{/* aca paso las tarjetas */}
		</div>
	);
};
export default UltimosLanzamientos;
