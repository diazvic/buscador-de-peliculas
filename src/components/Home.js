import ListaPeliculas from "./ListaPeliculas";
import "../styles/_Home.scss";
import "../styles/_ListaPeliculas.scss";
const Home = () => {
	return (
		<section className="contenedor-peliculas">
			<div className="div-lista-peliculas">
				<ListaPeliculas titulo="Peliculas Populares" categoria="popular" />
			</div>
			<div className="div-lista-peliculas">
				<ListaPeliculas
					titulo="Peliculas Mejor Puntuadas"
					categoria="top_rated"
				/>
			</div>
		</section>
	);
};

export default Home;
