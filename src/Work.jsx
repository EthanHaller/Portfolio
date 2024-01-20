import { useState } from "react"
import "./styles/work.css"

function Work() {
	const [workShowing, setWorkShowing] = useState("Yext")

	return (
		<>
			<div className="container">
				<h2>Work</h2>
			</div>
		</>
	)
}

export default Work
