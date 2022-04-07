import "../styles/_TarjetaPeliculas.scss";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const TarjetaPeliculas = ({ titulo, imagen, link }) => {
	return (
		<div className="tarjeta-peliculas">
			<Link to={link} className="link-tarjetas">
				<article>
					<img alt={titulo} src={imagen}></img>
					<p>{titulo}</p>
					<div className="contenedor-icono-tarjetas">
						<VisibilityIcon
							sx={{
								color: "#fafafa",
								border: "grey",
								borderRadius: "50%",
								p: 1,
								m: 2,
								fontSize: "40px",
								"&:hover": {
									color: "#1990ff",
								},
							}}
						/>
					</div>
				</article>
			</Link>
		</div>
	);
};

export default TarjetaPeliculas;
