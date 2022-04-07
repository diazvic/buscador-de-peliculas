import React from "react";
import "../styles/_NavBar.scss";
import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const NavBar = () => {
	return (
		<div>
			<nav className="barra-navegacion">
				<GiPopcorn className="popcorn" />
				<ul>
					<li>
						<Link className="link-nav" to="/">
							<HomeIcon className="icono-nav" />
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/ultimoslanzamientos">
							<TheatersIcon className="icono-nav" />
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/populares">
							<LocalFireDepartmentIcon className="icono-nav" />
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/buscar">
							<SearchIcon className="icono-nav" />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
