import { useState } from "react"
import avatar from "./images/avatar.png"
import "./styles/home.css"

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
