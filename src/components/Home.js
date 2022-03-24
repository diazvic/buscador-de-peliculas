import ListaPeliculas from "./ListaPeliculas";

const Home = () => {
	return (
		<section>
			Home
			<ListaPeliculas titulo="Peliculas Populares" url="popular" />
			<ListaPeliculas titulo="Peliculas Mejor Puntuadas" url="top_rated" />
			<ListaPeliculas titulo="Peliculas por venir" url="upcoming" />
		</section>
	);
};

export default Home;
