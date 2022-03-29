const TarjetaPeliculas = ({ titulo, imagen, link }) => {
	return (
		<article className="tarjeta-peliculas">
			<img src={imagen}></img>
			<p>{titulo}</p>
		</article>
	);
};

export default TarjetaPeliculas;
