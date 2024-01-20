import { useState } from "react"
import "./styles/contact.css"

function Contact({ innerRef }) {
	return (
		<>
			<div className="container" ref={innerRef}>
				<h2>Contact</h2>
			</div>
		</>
	)
}

export default Contact
