import { useState, useEffect } from "react";
import "../styles/_DetallePeliculas.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { detalleImagenFondo } from "../utils/Variables";
const DetallePeliculas = () => {
	const params = useParams();
	const [peliculaDetalle, setPeliculaDetalle] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.idDetallePelicula}?api_key=2d1d912928e5c447a9dcdeaf620cab9b&language=es`
		)
			.then((res) => res.json())
			.then((data) => setPeliculaDetalle(data));
	}, []);

	return (
		<div className="contenedor-detalle-pelicula">
			<div
				className="imagen-fondo"
				style={{
					backgroundImage:
						"url(" +
						` https://image.tmdb.org/t/p/original/${peliculaDetalle.backdrop_path}` +
						")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="contenedor-detalle">
				<div>
					<img
						alt="detalle de pelicula"
						src={`https://image.tmdb.org/t/p/w300/${peliculaDetalle.poster_path}`}
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
