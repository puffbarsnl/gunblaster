import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";
// import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const element = useRef(null)

  // const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

 
		const executeScroll = () => element.current.scrollIntoView()    
		// run this function from an event handler or an effect to execute scroll 
 
		// <div ref={myRef}>Element to scroll to</div> 
		// <button onClick={executeScroll}> Click to scroll </button> 

  return (
		<>
			<div className="banner">
				<div className="banner-wrapper">
					<h1>DE ORIGINELE, MILIEUVRIENDELIJKE GUN BLASTER</h1>
					<button onClick={() => executeScroll()} className="a-button">GUN BLASTER KOPEN</button>
				</div>
			<div className="banner-info">
				<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>VEILIG</p>
				<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>MILIEUVRIENDELIJK</p>
				<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline></svg>OPLAADBAAR</p>
			</div>
			</div>
			<div className="home-container">
				{status === "success" ? (
					<>
						<h2 ref={element}>Onze producten</h2>
						<div className="products">
							{data &&
								data?.map((product) => (
									<div key={product._id} className="product">
										<h3>{product.name}</h3>
										<Link to={"/product/" + product._id}>
											<img src={product.image?.url} alt={product.name} />
										</Link>

										<div className="details">
											<div>
												<span className="desc">{product.desc}</span>
											</div>
											<span className="price">€{(product.price - 0.05).toLocaleString('nl-nl')}</span>
										</div>
										<button onClick={() => handleAddToCart(product)}>
											In winkelwagen
										</button>
									</div>
								))}
						</div>
					</>
				) : status === "pending" ? (
					<p>Laden...</p>
				) : (
					<p>Onverwachte fout opgetreden...</p>
				)}
			</div>
			<section className="info-section">
				<div>
					<h1>EPISCHE STRIJD VEILIG EN ZONDER ROMMEL</h1>
					<p>Onze gun blasters zijn perfect voor zowel outdoor als indoor gevechten. De balletjes lossen automatisch op en bestaan voor 95% uit water. Hierdoor is het goed voor milieu en laat het geen rommel achter. Het speelplezier van een gun blaster is ook ongekend, omdat het makkelijk mee te nemen is en je het overal kunt gebruiken. Ga de strijd aan met je vrienden en versla ze in een episch gevecht.</p>
					<button onClick={() => executeScroll()} className="a-button" to="#">ASSORTIMENT BEKIJKEN</button>
				</div>
				<img src="https://res.cloudinary.com/gunblaster-nl/image/upload/v1662201037/image1_fvkuie.webp" alt="" />
			</section>
		</>
  );
};

export default Home;
