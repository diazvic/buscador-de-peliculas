import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TarjetaPeliculas from "./TarjetaPeliculas";
import "../styles/_Buscar.scss";
import TextField from "@mui/material/TextField";
import imagenBackup from "../imagenes/imagenBackup.png";
import { urlBase, apiKey, queryParamLenguaje } from "../utils/Variables";
const Buscar = () => {
	const [busquedaParametros, setBusquedaParametros] = useSearchParams({
		busqueda: "",
	});
	const [arrayPeliculas, setPeliculas] = useState([]);

	const handleChange = (e) => {
		setBusquedaParametros({
			busqueda: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		if (busquedaParametros.get("busqueda")) {
			fetch(
				`${urlBase}/search/movie?api_key=${apiKey}${queryParamLenguaje}&query=${busquedaParametros.get(
					"busqueda"
				)}`
			)
				.then((res) => res.json())
				.then((data) => {
					setPeliculas(data.results);
				});
		}
	}, [busquedaParametros]);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					{/* recordá que el h1 es el titulo principal de la pagina */}
					<h1>Busca tu pelicula</h1>
					<TextField
						sx={{ width: "100%", p: 1 }}
						onChange={handleChange}
						value={busquedaParametros.get("busqueda")}
					></TextField>
				</label>
			</form>
			<div className="contenedor-tarjetas-peliculas">
				{arrayPeliculas.map((pelicula) => (
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
		</>
	);
};

export default Buscar;
