import "../styles/_NavBar.scss";

const NavBar = () => {
	return (
		<div>
			<nav className="barra-navegacion">
				<ul>
					<li>Home</li>
					<li>Ultimos Lanzamientos</li>
					<li>Populares</li>
					<li>Buscar</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
