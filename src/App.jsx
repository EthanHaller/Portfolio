import { useRef } from "react"
import Home from "./Home"
import Header from "./Header"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {
	const homeRef = useRef(null)
	const workRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const handleScroll = (location) => {
		switch (location) {
			case "about":
				homeRef.current?.scrollIntoView({ block: "start", behavior: "smooth" })
				break
			case "work":
				workRef.current?.scrollIntoView({ block: "start", behavior: "smooth" })
				break
			case "projects":
				projectsRef.current?.scrollIntoView({ block: "start", behavior: "smooth" })
				break
			case "contact":
				contactRef.current?.scrollIntoView({ block: "start", behavior: "smooth" })
				break
		}
	}

	return (
		<>
			<Header handleScroll={handleScroll}/>
			<Home innerRed={homeRef} />
			<Work innerRef={workRef} />
			<Projects innerRef={projectsRef} />
			<Contact innerRef={contactRef} />
		</>
	)
}

export default App
