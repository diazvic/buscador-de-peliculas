import useFetchPeliculas from "../hooks/useFetchPeliculas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/_Carousel.scss";
import TarjetaCarousel from "./TarjetaCarousel";
const Carousel = ({ categoria }) => {
	const objetoPeliculas = useFetchPeliculas(categoria);
	console.log("carrusel", objetoPeliculas);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlaySpeed: true,
	};
	return (
		<div>
			<Slider {...settings}>
				{objetoPeliculas.peliculas.map((pelicula) => (
					<div key={pelicula.id} className="contenedor-diapositivas">
						<div
							style={{
								backgroundImage:
									"url(" +
									` https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}` +
									")",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						></div>
						<TarjetaCarousel
							titulo={pelicula.title}
							informacion={pelicula.overview}
							link={`/movie/${pelicula.id}`}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;

// fetch con now_playing
