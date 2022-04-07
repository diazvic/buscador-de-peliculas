import { useState, useEffect } from "react";

const useFetchPeliculas = (categoria, pagina) => {
	const [arrayPeliculas, setPeliculas] = useState([]);
	const [cargando, setCargando] = useState(false);
	const [totalPaginas, setTotalPaginas] = useState(1);

	useEffect(() => {
		setCargando(true);
		fetch(
			`https://api.themoviedb.org/3/movie/${categoria}?api_key=2d1d912928e5c447a9dcdeaf620cab9b&language=es&page=${pagina}`
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
