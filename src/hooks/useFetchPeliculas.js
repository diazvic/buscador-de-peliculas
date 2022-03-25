import { useState, useEffect } from "react";
// import { urlBase, apiKey, queryParamLenguaje } from "../utils/Variables";
const useFetchPeliculas = (categoria) => {
	const [arrayPeliculas, setPeliculas] = useState([]);
	const [loader, setLoader] = useState(false);

	// const url = `${urlBase}${apiKey}${queryParamLenguaje}=es`;
	//https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
	useEffect(() => {
		setLoader(true);
		fetch(
			`https://api.themoviedb.org/3/movie/${categoria}?api_key=2d1d912928e5c447a9dcdeaf620cab9b&language=es`
		)
			.then((res) => res.json())
			.then((data) => {
				setLoader(false);
				setPeliculas(data.results);
			});
	}, []);

	return {
		peliculas: arrayPeliculas,
		loader: loader,
	};
};

export default useFetchPeliculas;
