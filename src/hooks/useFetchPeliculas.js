import { useState, useEffect } from "react";

const useFetchPeliculas = (categoria, pagina) => {
	const [arrayPeliculas, setPeliculas] = useState([]);
	const [loader, setLoader] = useState(false);
	const [totalPaginas, setTotalPaginas] = useState(1);

	useEffect(() => {
		setLoader(true);
		fetch(
			`https://api.themoviedb.org/3/movie/${categoria}?api_key=2d1d912928e5c447a9dcdeaf620cab9b&language=es&page=${pagina}`
		)
			.then((res) => res.json())
			.then((data) => {
				setLoader(false);
				setPeliculas(data.results);
				setTotalPaginas(data.total_pages);
			});
	}, [pagina]);

	return {
		peliculas: arrayPeliculas,
		loader: loader,
		totalPaginas: totalPaginas,
	};
};

export default useFetchPeliculas;
