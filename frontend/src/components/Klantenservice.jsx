import React from "react";
import styled from 'styled-components'

const Klantenservice = () => {
	return (
		<Text>
			<h1>We zijn bereikbaar via Whatsapp, Bellen of Email:</h1>
			<h1>+31 6 233 566 76</h1>
			<h1 style={{"marginBottom": "10px"}}>gunblasternl@gmail.com</h1>
			<p>Contact formulier komt binnenkort.</p>
		</Text>
	)
}

const Text = styled.div`
	text-align: center;
	margin-top: 80px;
`

export default Klantenservice
