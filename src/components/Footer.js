import "../styles/_Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
	return (
		<footer className="footer">
			<p>Hecho por Victoria Diaz</p>
			<ul className="footer-iconos">
				<li>
					<a href="https://github.com/diazvic">
						<FaGithub className="footer-iconos" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/diazvic">
						<FaLinkedinIn className="footer-iconos" />
					</a>
				</li>
				<li>
					<a href="mailto: vico.9467@gmail.com">
						<MdOutlineMail className="footer-iconos" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
