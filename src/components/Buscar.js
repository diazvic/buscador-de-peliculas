import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchBusqueda from "../hooks/useFetchBusqueda";
import "../styles/_Buscar.scss";
const Buscar = () => {
	const [busquedaParametros, setBusquedaParametros] = useSearchParams({
		busqueda: "",
	});
	const [arrayPeliculas, setPeliculas] = useState([]);

	useEffect(() => {
		// setLoader(true);
		fetch(
			`https://api.themoviedb.org/3/${busquedaParametros.get(
				"busqueda"
			)}/company?api_key=2d1d912928e5c447a9dcdeaf620cab9b`
		)
			.then((res) => res.json())
			.then((data) => {
				setPeliculas(data.results);
			});
	}, []);
	const handleChange = (e) => {
		setBusquedaParametros({
			busqueda: e.target.value,
		});
		// const objetoBusqueda = useFetchBusqueda(busqueda);
	};
	return (
		<form>
			<label>
				<input
					type="text"
					onChange={handleChange}
					value={busquedaParametros.get("busqueda")}
				></input>
			</label>
			<label>
				<input type="submit"></input>
			</label>
		</form>
	);
};

export default Buscar;
// clave, valor
