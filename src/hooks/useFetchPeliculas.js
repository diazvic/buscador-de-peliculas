import { useState, useEffect } from "react";
// import { urlBase, apiKey, queryParamLenguaje } from "../utils/Variables";
const useFetchPeliculas = (categoria) => {
	const [peliculas, setPeliculas] = useState([]);
	// const url = `${urlBase}${apiKey}${queryParamLenguaje}=es`;
	//https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${categoria}?api_key=2d1d912928e5c447a9dcdeaf620cab9b`
		)
			.then((res) => res.json())
			.then((data) => {
				setPeliculas(data.results);
				console.log(data.results);
			});
	}, []);

	return peliculas;
};

export default useFetchPeliculas;
