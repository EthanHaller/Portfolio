import { FaGithub } from "react-icons/fa"
import { FaRegFileAlt } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"
import projectData from "../data/projects.json"
import "../styles/projects.sass"

function Projects({ innerRef }) {
	const featuredProjects = projectData.filter((project) => project.featured)
	const otherProjects = projectData.filter((project) => !project.featured)

	const featuredProjectsElement = featuredProjects.map((project, index) => (
		<div key={index} className={"not-yet-viewed featured-project-container" + (index % 2 === 1 ? " reverse" : "")}>
			<div className="featured-project-information">
				<h3 className={"featured-project-title" + (index % 2 === 1 ? " reverse" : "")}>{project.title}</h3>
				<div className={"featured-project-links" + (index % 2 === 1 ? " reverse" : "")}>
					{project.deploymentLink && (
						<a aria-label="View Site" target="_blank" rel="noopener noreferrer" href={project.deploymentLink} className="featured-project-link">
							<LuExternalLink />
						</a>
					)}
					{project.fileLink && (
						<a aria-label="View Report" target="_blank" rel="noopener noreferrer" href="/ML4VA.pdf" className="featured-project-link">
							<FaRegFileAlt />
						</a>
					)}
					<a aria-label="View Repository" target="_blank" rel="noopener noreferrer" href={project.githubLink} className="featured-project-link">
						<FaGithub />
					</a>
				</div>
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
				<img alt={project.title} className="featured-project-image" src={project.imagePath} />
			</div>
		</div>
	))

	const otherProjectsElement = otherProjects.map((project, index) => (
		<div target="_blank" key={index} className={"not-yet-viewed other-project-container" + (project.large ? " large" : "")}>
			<div className={"card-left" + (project.large ? " large" : "")}>
				<div className="card-header">
					<h3 className="project-title">{project.title}</h3>
					{project.deploymentLink && (
						<a aria-label="View Project" target="_blank" rel="noopener noreferrer" href={project.deploymentLink} className="project-link">
							<LuExternalLink />
						</a>
					)}
					<a aria-label="View Repository" target="_blank" rel="noopener noreferrer" href={project.githubLink} className="project-link">
						<FaGithub />
					</a>
				</div>
				<p className="project-description">{project.description}</p>
			</div>
			<div className={"card-right" + (project.large ? " large" : "")}>
				<img alt={project.title} className={"project-image" + (project.large ? " large" : "")} src={project.imagePath} />
			</div>
		</div>
	))

	return (
		<>
			<section className="container" ref={innerRef}>
				<div className="projects-section-title not-yet-viewed">
					<span className="title-line first"></span>
					<h2 className="projects-title">Featured Projects</h2>
					<span className="title-line second"></span>
				</div>
				<div className="featured-projects-container">{featuredProjectsElement}</div>
				<div className="other-projects-section-title not-yet-viewed">
					<span className="title-line first"></span>
					<h2 className="other-projects-title">Other Projects</h2>
					<span className="title-line second"></span>
				</div>
				<div className="other-projects-container">
					<div className="grid">{otherProjectsElement}</div>
				</div>
			</section>
		</>
	)
}

export default Projects
