import { useState } from "react";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import TarjetaPeliculas from "./TarjetaPeliculas";
import Paginado from "./Paginado";
import "../styles/_TarjetaPeliculas.scss";
import "../styles/_UltimosLanzamientos.scss";
import imagenBackup from "../imagenes/imagenBackup.png";

const UltimosLanzamientos = () => {
	const [pagina, setPagina] = useState(1);
	const categoria = "now_playing";
	const objetoPeliculas = useFetchPeliculas(categoria, pagina);

	const handleChange = (event, value) => {
		setPagina(value);
	};
	return (
		<main>
			<h2>Ultimos Lanzamientos</h2>
			<div className="contenedor-tarjetas-peliculas">
				{objetoPeliculas.peliculas.map((pelicula) => (
					<TarjetaPeliculas
						key={pelicula.id}
						titulo={pelicula.title}
						imagen={
							pelicula.poster_path
								? `
						https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`
								: imagenBackup
						}
						link={`/movie/${pelicula.id}`}
					/>
				))}
			</div>
			<div className="contenedor-paginado">
				<Paginado
					handleChange={handleChange}
					pagina={pagina}
					totalPaginas={objetoPeliculas.totalPaginas}
				/>
			</div>
		</main>
	);
};
export default UltimosLanzamientos;
