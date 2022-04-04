import ListaPeliculas from "./ListaPeliculas";
import Carousel from "./Carousel";
import "../styles/_Home.scss";
import "../styles/_ListaPeliculas.scss";
const Home = () => {
	return (
		<section>
			<Carousel categoria="now_playing" />
			<main className="contenedor-peliculas">
				<div className="div-lista-peliculas">
					<ListaPeliculas titulo="Peliculas Populares" categoria="popular" />
				</div>
				<div className="div-lista-peliculas">
					<ListaPeliculas
						titulo="Peliculas Mejor Puntuadas"
						categoria="top_rated"
					/>
				</div>
			</main>
		</section>
	);
};

export default Home;
