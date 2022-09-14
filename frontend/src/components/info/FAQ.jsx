import React from 'react'
import vragen from "./FaqInfo.json"
import Banner from "./Banner"

const FAQ = () => {
	return (
		<div className="faq">
			<h1>Veelgestelde Vragen</h1>
			<Banner className="faq-flex">
				{vragen.map((vraag) => (
					<Banner.Entity key={vraag.id}>
						<Banner.Question>{vraag.vraag}</Banner.Question>
						<Banner.Text>{vraag.antwoord}</Banner.Text>
					</Banner.Entity>
				))}
			</Banner>
		</div>
	)
}

export default FAQ