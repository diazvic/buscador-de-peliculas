import "../styles/_Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { github, linkedin, mail } from "../utils/Variables";
const Footer = () => {
	return (
		<footer className="footer">
			<p>Hecho por Victoria Diaz</p>
			<ul className="footer-iconos">
				<li>
					<a href={github}>
						<FaGithub alt="icono de github" className="footer-iconos" />
					</a>
				</li>
				<li>
					<a href={linkedin}>
						<FaLinkedinIn alt="icono de linkedin" className="footer-iconos" />
					</a>
				</li>
				<li>
					<a href={mail}>
						<MdOutlineMail alt="icono de mail" className="footer-iconos" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
