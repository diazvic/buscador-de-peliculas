import "../styles/_TarjetaCarousel.scss";
import { Link } from "react-router-dom";
const TarjetaCarousel = ({ titulo, informacion, link }) => {
	return (
		<article>
			<h2>{titulo}</h2>
			<p>{informacion}</p>
			<Link to={link}>
				<button>Ver mas...</button>
			</Link>
		</article>
	);
};

export default TarjetaCarousel;
