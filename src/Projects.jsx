import { useState } from "react"
import "./styles/projects.css"

function Projects({ innerRef }) {
	return (
		<>
			<div className="container" ref={innerRef}>
				<h2>Projects</h2>
			</div>
		</>
	)
}

export default Projects
