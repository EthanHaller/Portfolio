import { IoMail } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import "../styles/contact.sass"

function Contact({ innerRef }) {
	return (
		<>
			<section className="container" ref={innerRef}>
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
					<li>
						<a
							href="mailto:ethanhaller02@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Email"
							className="contact-link"
							aria-label="Send an email to ethanhaller02@gmail.com"
						>
							<IoMail className="contact-icon" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/EthanHaller"
							target="_blank"
							rel="noopener noreferrer"
							title="GitHub"
							className="contact-link"
							aria-label="View Ethan's GitHub profile"
						>
							<FaGithub className="contact-icon" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ethanhaller/"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
							className="contact-link"
							aria-label="View Ethan's LinkedIn profile"
						>
							<FaLinkedin className="contact-icon" aria-hidden="true" />
						</a>
					</li>
				</ul>
			</section>
		</>
	)
}

export default Contact
