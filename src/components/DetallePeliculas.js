import { useState, useEffect } from "react";
import "../styles/_DetallePeliculas.scss";
import { useParams } from "react-router-dom";
import { urlBase, apiKey, queryParamLenguaje } from "../utils/Variables";

const DetallePeliculas = () => {
	const params = useParams();
	const [peliculaDetalle, setPeliculaDetalle] = useState([]);
	useEffect(() => {
		fetch(
			`${urlBase}/movie/${params.idDetallePelicula}?api_key=${apiKey}${queryParamLenguaje}`
		)
			.then((res) => res.json())
			.then((data) => setPeliculaDetalle(data));
	}, []);
	const fondoImagen =
		peliculaDetalle.backdrop_path &&
		`url("https://image.tmdb.org/t/p/original/${peliculaDetalle.backdrop_path}")`;
	return (
		<div className="contenedor-detalle-pelicula">
			<div
				className="imagen-fondo"
				style={{
					backgroundImage: fondoImagen,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="contenedor-detalle">
				<div>
					<img
						alt="detalle de pelicula"
						src={
							peliculaDetalle.poster_path &&
							`https://image.tmdb.org/t/p/w300/${peliculaDetalle.poster_path}`
						}
					/>
				</div>
				<div className="detalle-texto">
					<div>
						<h1>{peliculaDetalle.title}</h1>
						<span>{peliculaDetalle.release_date}</span>
					</div>
					<h4>General</h4>
					<p className="descripcion-detalle">{peliculaDetalle.overview}</p>
					<h4>Géneros</h4>
					{peliculaDetalle.genres?.map((genero) => (
						<ul key={genero.id}>
							<li>{genero.name}</li>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

export default DetallePeliculas;
