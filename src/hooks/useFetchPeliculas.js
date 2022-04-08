import { Language } from "@mui/icons-material";
import { useState, useEffect } from "react";
import {
	urlBase,
	apiKey,
	queryParamLenguaje,
	queryParamPagina,
} from "../utils/Variables";
const useFetchPeliculas = (categoria, pagina) => {
	const [arrayPeliculas, setPeliculas] = useState([]);
	const [cargando, setCargando] = useState(false);
	const [totalPaginas, setTotalPaginas] = useState(1);

	useEffect(() => {
		setCargando(true);
		fetch(
			`${urlBase}/movie/${categoria}?api_key=${apiKey}${queryParamLenguaje}${queryParamPagina}${pagina}`
		)
			.then((res) => res.json())
			.then((data) => {
				setCargando(false);
				setPeliculas(data.results);
				setTotalPaginas(data.total_pages);
			});
	}, [pagina]);

	return {
		peliculas: arrayPeliculas,
		cargando: cargando,
		totalPaginas: totalPaginas,
	};
};

export default useFetchPeliculas;
