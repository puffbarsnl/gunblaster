import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearCart, getTotals } from "../slices/cartSlice";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Container>
      <h2>Uw bestelling is voltooid.</h2>
      <p>Het kan even duren voordat uw bestelling is verwerkt.</p>
			<p style={{background: "#333", color: "#fff", padding: 8, borderRadius: 4}}>MEDEDELING: Vanwege populariteit zijn onze producten over 10-15 dagen op voorraad.</p>
      <p>
				Neem bij vragen contact op met de onze:{" "}
        <strong><Link to="/klantenservice">Klantenservice</Link></strong>
      </p>
      <p>U kunt uw bestelstatus controleren door te navigeren naar <strong><Link to="/orders">Bestellingen</Link>.</strong></p>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
