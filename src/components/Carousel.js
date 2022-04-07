import useFetchPeliculas from "../hooks/useFetchPeliculas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/_Carousel.scss";
import TarjetaCarousel from "./TarjetaCarousel";

const Carousel = ({ categoria }) => {
	const objetoPeliculas = useFetchPeliculas(categoria);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					dots: false,
				},
			},
		],
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
								width: "100%",
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end",
							}}
						>
							<TarjetaCarousel
								titulo={pelicula.title}
								informacion={pelicula.overview}
								link={`/movie/${pelicula.id}`}
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
