import "../styles/_ListaItemPelicula.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const ListaItemPelicula = ({ titulo, imagen, link }) => {
	return (
		<div className="lista-peliculas">
			<div className="contenedor-imagen">
				<img src={imagen} />
			</div>
			<p>{titulo}</p>
			<Link to={link}>
				<ArrowForwardIosIcon
					sx={{
						bgcolor: "info.main",
						color: "#ffffff",
						borderRadius: "50%",
						p: 1,
					}}
					className="icono-detalle"
				/>
			</Link>
		</div>
	);
};

export default ListaItemPelicula;
