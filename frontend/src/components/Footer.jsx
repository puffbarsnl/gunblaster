import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="footer">
				<div className="footer-links">
					<div>
						<h2>Pagina's</h2>
						<Link to="/login">Inloggen</Link>
						<Link to="/register">Registreren</Link>
						<Link to="/cart">Winkelwagen</Link>
						<Link to="/klantenservice">Klantenservice</Link>
					</div>
					<div>
						<h2>Info</h2>
						<Link to="#">FAQ</Link>
						<Link to="#">Verzendbeleid</Link>
						<Link to="#">Retourbeleid</Link>
						<Link to="#">Privacybeleid</Link>
						<Link to="#">Algemene voorwaarden</Link>
					</div>
					<div>
						<h2>Contact</h2>
						<p>gunblasternl@gmail.com</p>
						<p>+31 6 233 566 76</p>
					</div>
				</div>
				<p className="footer-cr">GUNBLASTER.NL 2022 © Alle rechten voorbehouden</p>
			</footer>
	)
}

export default Footer
