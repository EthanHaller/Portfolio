import { useState } from "react"
import projectData from "./data/projects.json"
import "./styles/projects.css"

function Projects({ innerRef }) {
	const featuredProjects = projectData.filter((project) => project.featured)

	const featuredProjectsElement = featuredProjects.map((project, index) => (
		<div key={index} className={"featured-project-container" + (index % 2 === 1 ? " reverse" : "")}>
			<h3 className={"featured-project-title" + (index % 2 === 1 ? " reverse" : "")}>{project.title}</h3>
		</div>
	))

	return (
		<>
			<div className="container" ref={innerRef}>
				<div className="projects-section-title">
					<span className="title-line first"></span>
					<h2 className="projects-title">Featured Projects</h2>
					<span className="title-line second"></span>
				</div>
				<div className="featured-projects-container">{featuredProjectsElement}</div>
				<div className="other-projects-container"></div>
			</div>
		</>
	)
}

export default Projects
