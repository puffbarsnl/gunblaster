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
						<Link to="/faq">FAQ</Link>
						<Link to="/verzend-beleid">Verzendbeleid</Link>
						<Link to="/retour-beleid">Retourbeleid</Link>
						<Link to="/privacy-beleid">Privacybeleid</Link>
						<Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
					</div>
					<div>
						<h2>Contact</h2>
						<p>gunblasternl@gmail.com</p>
					</div>
				</div>
				<p className="footer-cr">GUNBLASTER.NL 2022 © Alle rechten voorbehouden</p>
			</footer>
	)
}

export default Footer
