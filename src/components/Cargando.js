import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../styles/_Cargando.scss";
const Cargando = ({ estaCargando }) => {
	return (
		estaCargando && (
			<div className="cargando">
				<Box sx={{ display: "flex" }}>
					<CircularProgress />
				</Box>
			</div>
		)
	);
};

export default Cargando;
