import { useState } from "react"
import { IoMail } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import "./styles/contact.css"

function Contact({ innerRef }) {
	return (
		<>
			<div className="container" ref={innerRef}>
				<div className="contact-section-title not-yet-viewed">
					<span className="title-line first"></span>
					<h2 className="contact-title">Contact</h2>
					<span className="title-line first"></span>
				</div>
				<div className="contact-description-container not-yet-viewed">
					<p className="contact-description">
						Thanks for taking the time to view my site! If you have any questions, collaboration ideas, or just want to connect, feel free to reach
						out. I'm excited to hear from you!
					</p>
				</div>
				<ul className="contact-list not-yet-viewed">
					<a href="mailto:ethanhaller02@gmail.com" target="_blank" title="Email" className="contact-link">
						<IoMail className="contact-icon" />
					</a>
					<a href="https://github.com/EthanHaller" target="_blank" title="GitHub" className="contact-link">
						<FaGithub className="contact-icon" />
					</a>
					<a href="https://www.linkedin.com/in/ethanhaller/" target="_blank" title="LinkedIn" className="contact-link">
						<FaLinkedin className="contact-icon" />
					</a>
				</ul>
			</div>
		</>
	)
}

export default Contact
