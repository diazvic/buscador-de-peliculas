import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DetallePeliculas from "./components/DetallePeliculas";
import Buscar from "./components/Buscar";
import Footer from "./components/Footer";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/ultimoslanzamientos"
						element={<UltimosLanzamientos />}
					/>
					<Route path="/populares" element={<Populares />} />
					<Route path="/buscar" element={<Buscar />} />
					<Route
						path="/movie/:idDetallePelicula"
						element={<DetallePeliculas />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
