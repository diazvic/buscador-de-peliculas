import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TarjetaPeliculas from "./TarjetaPeliculas";
import "../styles/_Buscar.scss";
import TextField from "@mui/material/TextField";

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
				`https://api.themoviedb.org/3/search/movie?api_key=2d1d912928e5c447a9dcdeaf620cab9b&language=es&query=${busquedaParametros.get(
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
						imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
						link={`/movie/${pelicula.id}`}
					/>
				))}
			</div>
		</>
	);
};

export default Buscar;
