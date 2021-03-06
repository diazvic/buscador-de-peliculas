import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Paginado = ({ handleChange, totalPaginas, pagina }) => {
	return (
		<Stack spacing={2}>
			<Pagination
				count={totalPaginas > 500 ? 500 : totalPaginas}
				color="primary"
				onChange={handleChange}
				page={pagina}
				size={window.innerWidth > 576 ? "large" : "small"}
			/>
		</Stack>
	);
};

export default Paginado;
