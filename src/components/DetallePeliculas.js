import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
const DetallePeliculas = (categoria, pagina) => {
	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
		console.log(value);
	};
	const { totalPages } = useFetchPeliculas(pagina);
	return (
		<div>
			{/* tarjetas con ultimos lanzamientos y populares pasandole distintas props */}
			<h1>Ultimos lanzamientos</h1>

			<Stack spacing={2}>
				<Pagination
					count={totalPages > 500 ? 500 : totalPages}
					page={page}
					onChange={handleChange}
				/>
			</Stack>
		</div>
	);
};

export default DetallePeliculas;
