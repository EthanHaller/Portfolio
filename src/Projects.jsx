import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"
import projectData from "./data/projects.json"
import "./styles/projects.css"

function Projects({ innerRef }) {
	const featuredProjects = projectData.filter((project) => project.featured)

	const featuredProjectsElement = featuredProjects.map((project, index) => (
		<div key={index} className={"featured-project-container" + (index % 2 === 1 ? " reverse" : "")}>
			<div className="featured-project-information">
				<h3 className={"featured-project-title" + (index % 2 === 1 ? " reverse" : "")}>{project.title}</h3>
				<ul className={"featured-project-links" + (index % 2 === 1 ? " reverse" : "")}>
					<a target="_blank" href={project.githubLink} className="featured-project-link">
						<FaGithub />
					</a>
					{project.deploymentLink && (
						<a target="_blank" href={project.deploymentLink} className="featured-project-link">
							<LuExternalLink />
						</a>
					)}
				</ul>
				<p className="featured-project-description">{project.description}</p>
				<ul className={"skills-list projects" + (index % 2 === 1 ? " reverse" : "")}>
					{project.skills.map((skill, index) => (
						<li key={index} className="skill">
							{skill}
						</li>
					))}
				</ul>
			</div>
			<div className="featured-project-image-wrapper">
				<img className="featured-project-image" src={project.imagePath}></img>
				<div className="overlay"></div>
			</div>
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
