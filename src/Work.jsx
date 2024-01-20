import React, { useState } from "react"
import workData from "./data/work.json"
import "./styles/work.css"

function Work({ innerRef }) {
	const [workShowing, setWorkShowing] = useState("Yext")

	const showWork = (workTitle) => {
		setWorkShowing(workTitle)
	}

	const workButtons = workData.map((workItem) => (
		<div key={workItem.company} className={`button-wrapper ${workShowing === workItem.company ? "active" : ""}`} onClick={() => showWork(workItem.company)}>
			<div className="line"></div>
			<button>{workItem.company}</button>
		</div>
	))

	const selectedWork = workData.find((workItem) => workItem.company === workShowing)

	return (
		<>
			<div className="container work-container" ref={innerRef}>
				<div className="buttons-container">{workButtons}</div>
				<div className="work-description-container">
					{selectedWork && (
						<>
							<p className="date">{selectedWork.dates}</p>
							<div className="work-description">
								<h3 className="date-title">
									{selectedWork.position} • {selectedWork.company}
								</h3>
								{selectedWork.bullets.map((bullet, index) => (
									<p key={index} className="bullet">
										{bullet}
									</p>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Work
