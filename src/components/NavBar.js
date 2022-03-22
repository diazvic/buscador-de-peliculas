import React from "react";
import "../styles/_NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<div>
			<nav className="barra-navegacion">
				<ul>
					<li>
						<Link className="link-nav" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/ultimoslanzamientos">
							Ultimos Lanzamientos
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/populares">
							Populares
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/buscar">
							Buscar
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
