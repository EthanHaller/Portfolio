import React, { useEffect, useRef } from "react"
import Preloader from "./components/Preloader"
import Home from "./components/Home"
import Header from "./components/header/Header"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
	const bodyRef = useRef(document.body)
	const homeRef = useRef(null)
	const workRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const handleScroll = (location) => {
		switch (location) {
			case "home":
				window.scrollTo({ top: 0, behavior: "smooth" })
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

	useEffect(() => {
		const updateMousePosition = (event) => {
			const { clientX, clientY } = event

			const adjustedX = clientX + window.scrollX
			const adjustedY = clientY + window.scrollY

			if (!bodyRef.current) return
			bodyRef.current.style.setProperty("--x", `${adjustedX}px`)
			bodyRef.current.style.setProperty("--y", `${adjustedY}px`)
		}

		window.addEventListener("mousemove", updateMousePosition)

		return () => {
			window.removeEventListener("mousemove", updateMousePosition)
		}
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove("not-yet-viewed")
						entry.target.classList.add("viewed")
					}
				})
			},
			{ threshold: 0.4 }
		)

		const hiddenElements = document.querySelectorAll(".not-yet-viewed")
		hiddenElements.forEach((element) => observer.observe(element))
	}, [])

	return (
		<>
			<style>
				{`
					body {
						background-image: radial-gradient(
						circle farthest-side at var(--x) var(--y),
						transparent,
						var(--bg-secondary) 0%,
						transparent 35vw
						);
					}
				`}
			</style>
			<Preloader />
			<Header handleScroll={handleScroll} />
			<Home innerRef={homeRef} />
			<Work innerRef={workRef} />
			<Projects innerRef={projectsRef} />
			<Contact innerRef={contactRef} />
		</>
	)
}

export default App
