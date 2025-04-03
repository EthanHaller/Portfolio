import React, { useState } from "react"
import workData from "../data/work.json"
import "../styles/work.sass"

function Work({ innerRef }) {
	const [workShowing, setWorkShowing] = useState("Yext")
	const [buttonSelected, setButtonSelected] = useState("Yext")
	const [fade, setFade] = useState(false)

	const showWork = (workTitle) => {
		if (buttonSelected === workTitle) return
		setButtonSelected(workTitle)
		setFade(true)
		setTimeout(() => {
			setWorkShowing(workTitle)
			setFade(false)
		}, 150)
	}

	const selectedWork = workData.find((workItem) => workItem.company === workShowing)

	return (
		<section className="container" ref={innerRef}>
			<div className="work-section-title not-yet-viewed">
				<span className="title-line first"></span>
				<h2 className="work-title">Work</h2>
				<span className="title-line second"></span>
			</div>
			<div className="work-container not-yet-viewed">
				<div className="buttons-container">
					{workData.map((workItem) => (
						<div key={workItem.company} className="button-wrapper">
							<span className="line" aria-hidden="true"></span>
							<button
								className={buttonSelected === workItem.company ? "active" : ""}
								onClick={() => showWork(workItem.company)}
								aria-pressed={buttonSelected === workItem.company}
								aria-label={`Show experience at ${workItem.company}`}
							>
								{workItem.company}
							</button>
						</div>
					))}
				</div>
				<div
					className={`work-description-container ${fade ? "fade" : ""}`}
					role="region"
					aria-live="polite"
					aria-label={`Details about work at ${selectedWork?.company}`}
				>
					{selectedWork && (
						<>
							<div className="work-description">
								<h3 className="position-company">
									{selectedWork.position} •{" "}
									<a className="link" target="_blank" href={selectedWork.link} rel="noopener noreferrer">
										{selectedWork.company}
									</a>
								</h3>
								<p className="date">{selectedWork.dates}</p>
								{selectedWork.bullets.map((bullet, index) => (
									<p key={index} className="bullet">
										{bullet}
									</p>
								))}
							</div>
							<ul className="skills-list">
								{selectedWork.skills.map((skill, index) => (
									<li key={index} className="skill">
										{skill}
									</li>
								))}
							</ul>
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default Work
