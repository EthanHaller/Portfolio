import { useState } from "react"
import "./styles/projects.css"

function Projects({ innerRef }) {
	return (
		<>
			<div className="container" ref={innerRef}>
				<h2 style={{marginBottom: "3000px"}}>Projects</h2>
			</div>
		</>
	)
}

export default Projects
