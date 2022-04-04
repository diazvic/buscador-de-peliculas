import "../styles/_ListaItemPelicula.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const ListaItemPelicula = ({ titulo, imagen, link }) => {
	return (
		<div className="lista-peliculas">
			<div className="contenedor-imagen">
				<img src={imagen} />
				<p>{titulo}</p>
			</div>
			<div className="contenedor-link">
				<Link to={link} className="contenedor-icono">
					<ArrowForwardIosIcon
						sx={{
							bgcolor: "info.main",
							color: "#ffffff",
							borderRadius: "50%",
							p: 1,
							m: 2,
							fontSize: "30px",
						}}
						className="icono-detalle"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ListaItemPelicula;
