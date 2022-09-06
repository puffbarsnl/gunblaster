import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../slices/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${url}/products/find/${params.id}`);

        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="styled-product">
      <div className="product-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="img-container">
              <img src={product.image?.url} alt="product" />
            </div>
            <div className="product-details">
              <h1>{product.name}</h1>
              <Price><OldPrice>€{(product?.price + 20 - 0.05).toLocaleString('nl-nl')}</OldPrice>€{(product?.price - 0.05).toLocaleString('nl-nl')}</Price>
							<ul>
								<li>Schiet tot wel 20 meter</li>
								<li>Elektrisch machinegeweer mechanisme</li>
								<li>Veiligheid staat voorop, alles compleet veilig en getest</li>
								<li>Geschikt voor kinderen vanaf 6 jaar</li>
							</ul>
              <button
                className="product-add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                In winkelwagen
              </button>
							<div className="payments">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="60" height="40" aria-labelledby="pi-ideal"><title id="pi-ideal">iDEAL</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"></path><path d="M14 6.912V19h5.648C24.776 19 27 16.302 27 12.486 27 8.834 24.776 6 19.648 6h-4.67c-.543 0-.978.414-.978.912Z" fill="#C06"></path><path d="M19.312 21h-8.884C9.64 21 9 20.373 9 19.6V5.4c0-.773.64-1.4 1.428-1.4h8.884C27.742 4 29 9.317 29 12.482 29 17.974 25.555 21 19.313 21h-.001ZM10.428 4.467a.944.944 0 0 0-.878.573.936.936 0 0 0-.074.36v14.2a.936.936 0 0 0 .59.866c.115.046.238.07.362.068h8.884c5.938 0 9.212-2.86 9.212-8.052 0-6.972-5.774-8.015-9.212-8.015h-8.884Z"></path><path d="M16.252 11.008c.188 0 .361.03.528.088.167.06.304.155.427.273.116.125.21.28.282.457.065.184.101.398.101.649 0 .22-.028.42-.08.604a1.417 1.417 0 0 1-.245.479 1.197 1.197 0 0 1-.413.317 1.437 1.437 0 0 1-.586.118H15V11h1.252v.008Zm-.044 2.44c.095 0 .181-.016.276-.045a.539.539 0 0 0 .23-.155.863.863 0 0 0 .168-.28c.043-.118.065-.25.065-.42 0-.147-.015-.287-.044-.405a.814.814 0 0 0-.145-.31.656.656 0 0 0-.26-.199 1.047 1.047 0 0 0-.398-.066h-.464v1.887h.572v-.008Zm3.995-2.44v.553h-1.548v.64h1.426v.51h-1.426v.73h1.585v.552h-2.229V11h2.194v.008h-.002Zm2.215 0 1.1 2.992h-.673l-.224-.663h-1.1l-.232.663h-.652l1.108-2.992h.673Zm.037 1.835-.37-1.098h-.007l-.384 1.098h.76Zm2.112-1.835v2.44H26V14h-2.076v-2.992h.643Z" fill="#fff"></path><path d="M11.5 13.652c.829 0 1.5-.593 1.5-1.326 0-.732-.671-1.326-1.5-1.326s-1.5.594-1.5 1.326c0 .732.671 1.326 1.5 1.326ZM12.63 19c-1.258 0-2.269-.9-2.269-2.007v-1.568a.969.969 0 0 1 .337-.715c.214-.189.502-.294.802-.291a1.24 1.24 0 0 1 .433.073c.137.05.262.124.368.218.106.093.19.205.248.327a.93.93 0 0 1 .09.388V19h-.008Z"></path></svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="60" height="40" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="60" height="40" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="60" height="40" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
							</div>
							<h2>Deze Gunblaster bevat</h2>
							<div className="product-info">
								{/* 20.000+ Orbeez (gel ballen) t.w.v. €25 - Veiligheidsbril - Munitie magazijn - Magazijn adapter - 7.4v Lithium oplaadbare batterij - USB oplaadkabel - Gebruiksaanwijzing */}
								{product.desc}
							</div>
							<div className="extra-info">
								<p><svg stroke="none" fill="#ef233c" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path></svg>30 dagen retourtijd</p>
								<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ef233c" stroke="#ef233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>2 tot 7 dagen levertijd</p>
								<p><svg stroke="none" fill="#ef233c" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>Altijd veilig</p>
							</div>
            </div>
          </>
        )}
      </div>
			<div className="description">
				<div>
					<h2>Beschrijving</h2>
					<p>Met deze duurzame Gunblaster kun jij de strijd aangaan met je vrienden of targets afschieten als oefening. Bestel je Gunblaster op Gunblaster.nl en beleef veel speelplezier. Deze Gunblaster kan meer dan 300 ballen per minuut afschieten, elk tot wel 20 meter ver! De Gunblaster is volledig geautomatiseerd en elektrisch aangedreven.</p>
				</div>
				<div>
					<h2>Gel ballen</h2>
					<p>Stop de gel ballen 2 tot 3 uur in water. Stop de gel ballen in het magazijn. Klaar voor de start, schieten maar! De gel ballen lossen vanzelf op, en zijn niet schadelijk. Zelfs als je ze zou opeten zou er geen schade ontstaan, maar wij raden zeker niet aan om ze opzettelijk te consumeren.</p>
				</div>
				<div>
					<h2>Milieuvriendelijk</h2>
					<p>De gel ballen laten geen vuil achter. Dit komt omdat de gel ballen op waterbasis zijn gemaakt. Dit zorgt ervoor dat het oplost en geen sporen achterlaat. Goed voor het milieu dus.</p>
				</div>
				<div>
					<h2>Veiligheid</h2>
					<p>De gel balletjes zullen geen schade aanbrengen op je lichaam. Ze spatten vanzelf uitelkaar bij impact. Zorg er wel altijd voor dat je een veiligheidsbril draagt tijdens gebruik. Zorg er ook voor dat je niet zomaar op iemand schiet die geen veiligheidsbril draagt. Hou rekening met anderen en je omgeving wanneer je de Gunblaster gebruikt.</p>
				</div>
			</div>
    </div>
  );
};

export default Product;

const Price = styled.p`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 25px;
`;

const OldPrice = styled.span`
	text-decoration: line-through;
	margin: 1rem 8px 1rem 0;
	color: #ef233c;
	font-weight: bold;
	font-size: 25px;
`
