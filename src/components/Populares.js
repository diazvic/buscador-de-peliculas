import { useState } from "react";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import TarjetaPeliculas from "./TarjetaPeliculas";
import Paginado from "./Paginado";
import "../styles/_TarjetaPeliculas.scss";
import "../styles/_UltimosLanzamientos.scss";

const Populares = () => {
	const [pagina, setPagina] = useState(1);
	const categoria = "popular";
	const objetoPeliculas = useFetchPeliculas(categoria, pagina);
	const handleChange = (event, value) => {
		setPagina(value);
	};
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
export default Populares;
