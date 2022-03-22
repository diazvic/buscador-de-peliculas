import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DetallePeliculas from "./components/DetallePeliculas";
import Buscar from "./components/Buscar";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ultimoslanzamientos" element={<DetallePeliculas />} />
					<Route
						path="pelicula/:idDetallePelicula"
						element={<DetallePeliculas />}
					/>
					<Route path="/populares" element={<DetallePeliculas />} />
					<Route path="/buscar" element={<Buscar />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
