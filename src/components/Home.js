import ListaPeliculas from "./ListaPeliculas";
import Carousel from "./Carousel";
import "../styles/_Home.scss";
import "../styles/_ListaPeliculas.scss";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import Cargando from "./Cargando";

const Home = () => {
	const fetchPopulares = useFetchPeliculas("popular");
	const fetchPuntuadas = useFetchPeliculas("top_rated");
	const fetchCarousel = useFetchPeliculas("now_playing");
	const cargaCompleta = fetchPopulares.cargando && fetchPuntuadas.cargando;

	return (
		<>
			<Cargando estaCargando={cargaCompleta} />
			{!cargaCompleta && (
				<>
					<section>
						<Carousel peliculas={fetchCarousel.peliculas} />
					</section>
					<main className="contenedor-peliculas">
						<div className="div-lista-peliculas">
							<ListaPeliculas
								titulo="Peliculas Populares"
								peliculas={fetchPopulares.peliculas}
							/>
						</div>
						<div className="div-lista-peliculas">
							<ListaPeliculas
								titulo="Peliculas Mejor Puntuadas"
								peliculas={fetchPuntuadas.peliculas}
							/>
						</div>
					</main>
				</>
			)}
		</>
	);
};

export default Home;
