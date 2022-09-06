import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import React, { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
	const [show, setShow] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
	const userId = useSelector((state) => state.auth._id); 

	const showDropdown = () => {
		setShow(!show);
	}

  return (
		<>
		{/* MOBILE NAVBAR */}
		<nav className="mobile-bar">
			{
				show ? (
					<button onClick={() => showDropdown()}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
					) : (
						<button onClick={() => showDropdown()}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
				)
			}
			<Link to="/">
        <h2>GUNBLASTER</h2>
      </Link>
			<Link to="/cart">
        <div className="nav-bag">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
		</nav>
		<div className={`mobile-links ${show ? "show" : null}`}>
			{auth._id ? (
				<MobileLinks>
					<Link to="/klantenservice">
						Klantenservice
					</Link>
					{userId ? (
					<Link to={"/user/" + userId}>
						Gebruiker
					</Link>
					) : (
						""
					)}
					{userId && (
						<Link to="/orders">Bestellingen</Link>
					)}
					{auth.isAdmin ? (
							<Link to="/admin/summary">Admin</Link>
					) : ""}
					<div
						onClick={() => {
							dispatch(logoutUser(null));
						}}
					>
						Uitloggen
					</div>
				</MobileLinks>
			) : (
				<MobileAuthLinks>
					<Link to="/klantenservice">
						Klantenservice
					</Link>
					
					<Link to="/login">Inloggen</Link>
					<Link to="register">Registreren</Link>
				</MobileAuthLinks>
			)}
		</div>

		{/* PC NAVBAR */}
		<nav className="info-bar">
			<p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>VEILIG BETALEN</p>
			<p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>SNELLE LEVERING</p>
			<p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>BEOORDEELD MET EEN 9.7</p>
		</nav>
    <nav className="nav-bar">
      <Link to="/">
        <h2>GUNBLASTER</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
			<div className="nav-links">

      {auth._id ? (
        <Links>
					<Link to="/klantenservice">
							Klantenservice
						</Link>
					{userId ? (
					<Link to={"/user/" + userId}>
						Gebruiker
					</Link>
					) : (
						""
					)}
					{userId && (
						<Link to="/orders">Bestellingen</Link>
					)}
          {auth.isAdmin ? (
              <Link to="/admin/summary">Admin</Link>
          ) : ""}
          <div
            onClick={() => {
              dispatch(logoutUser(null));
            }}
          >
            Uitloggen
          </div>
        </Links>
      ) : (
        <AuthLinks>
					<Link to="/klantenservice">
						Klantenservice
					</Link>
          <Link to="/login">Inloggen</Link>
          <Link to="register">Registreren</Link>
        </AuthLinks>
      )}
			</div>
    </nav>
		</>
  );
};

export default NavBar;

const AuthLinks = styled.div`
  a {
		margin-left: 1.5rem;
		
		&:last-child {
			margin-right: 20px;
		}
  }
`;

const Links = styled.div`
	color: white;
	display: flex;

	div {
		cursor: pointer;
		margin-left: 1.5rem;
		margin-right: 20px;
	}

  a {
		margin-left: 1.5rem;
	}
`;

const MobileAuthLinks = styled.div`
	display: flex;
	flex-direction: column;
`

const MobileLinks = styled.div`
	display: flex;
	flex-direction: column;

	div {
		color: #202020;
		font-size: 1.5rem;
		padding: 20px 0;
		text-decoration: none;
	}
`
