// import { useState, useEffect } from "react";
// const useFetchBusqueda = (busqueda) => {
// 	const [arrayPeliculas, setPeliculas] = useState([]);
// 	const [loader, setLoader] = useState(false);
// 	const [totalPages, setTotalPages] = useState(1);

// 	useEffect(() => {
// 		setLoader(true);
// 		fetch(
// 			`https://api.themoviedb.org/3/${busqueda}/company?api_key=2d1d912928e5c447a9dcdeaf620cab9b`
// 		)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setLoader(false);
// 				setPeliculas(data.results);
// 				setTotalPages(data.total_pages);
// 			});
// 	}, []);

// 	return {
// 		peliculas: arrayPeliculas,
// 		loader: loader,
// 		totalPages: totalPages,
// 	};
// };

// export default useFetchBusqueda;
