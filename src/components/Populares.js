import { useState } from "react";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import TarjetaPeliculas from "./TarjetaPeliculas";
import Paginado from "./Paginado";
import "../styles/_TarjetaPeliculas.scss";
import "../styles/_UltimosLanzamientos.scss";
import imagenBackup from "../imagenes/imagenBackup.png";
import Cargando from "./Cargando";

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
			<Cargando estaCargando={objetoPeliculas.cargando} />
			{!objetoPeliculas.cargando && (
				<>
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
				</>
			)}
		</main>
	);
};
export default Populares;
