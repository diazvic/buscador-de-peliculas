import "../styles/_ListaItemPelicula.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const ListaItemPelicula = ({ titulo, imagen, link }) => {
	return (
		<div className="lista-peliculas">
			<div className="contenedor-imagen">
				<img src={imagen} />
			</div>
			<div className="contenedor-icono">
				<Link to={link}>
					<p>{titulo}</p>
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
