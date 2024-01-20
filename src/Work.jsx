import { useState } from "react"
import "./styles/work.css"

function Work({ innerRef }) {
	const [workShowing, setWorkShowing] = useState("Yext")

	return (
		<>
			<div className="container" ref={innerRef}>
				<h2>Work</h2>
			</div>
		</>
	)
}

export default Work
