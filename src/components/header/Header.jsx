//https://www.codemzy.com/blog/react-sticky-header-disappear-scroll

import { useState, useEffect } from "react"
import "../../styles/header.sass"
import MobileHeader from "./MobileHeader"

function Header({ handleScroll }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 725)
	const scrollDirection = useScrollDirection()
	const [homeVisible, setHomeVisible] = useState(false)
	const [resumeVisible, setResumeVisible] = useState(false)
	const [workVisible, setWorkVisible] = useState(false)
	const [projectsVisible, setProjectsVisible] = useState(false)
	const [contactVisible, setContactVisible] = useState(false)
	const [revealed, setRevealed] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 725)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	useEffect(() => {
		const navItems = ["home", "work", "projects", "contact", "resume"]

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

		if (prefersReducedMotion) {
			setHomeVisible(true)
			setResumeVisible(true)
			setWorkVisible(true)
			setProjectsVisible(true)
			setContactVisible(true)
			setRevealed(true)
			return
		}

		navItems.forEach((item, index) => {
			setTimeout(() => {
				switch (item) {
					case "home":
						setHomeVisible(true)
						break
					case "resume":
						setResumeVisible(true)
						break
					case "work":
						setWorkVisible(true)
						break
					case "projects":
						setProjectsVisible(true)
						break
					case "contact":
						setContactVisible(true)
						break
				}
			}, index * 200 + 3500)
		})

		setRevealed(true)
	}, [])

	return (
		<>
			{isMobile ? (
				<MobileHeader handleScroll={handleScroll} revealed={revealed} />
			) : (
				<nav className={"header" + (scrollDirection === "down" ? " hide" : " show")} role="navigation" aria-label="Main navigation">
					<a href="#home" className="header-logo-wrapper" onClick={() => handleScroll("home")}>
						<img src="/images/EHLogo.png" alt="Ethan Haller Logo" className={`header-logo${homeVisible ? " viewed" : " not-viewed"}`} />
					</a>
					<a href="#work" className={`nav-item${workVisible ? " viewed" : " not-viewed"}`} onClick={() => handleScroll("work")}>
						Work
					</a>
					<a href="#projects" className={`nav-item${projectsVisible ? " viewed" : " not-viewed"}`} onClick={() => handleScroll("projects")}>
						Projects
					</a>
					<a href="#contact" className={`nav-item${contactVisible ? " viewed" : " not-viewed"}`} onClick={() => handleScroll("contact")}>
						Contact
					</a>
				</nav>
			)}
		</>
	)
}

function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null)

	useEffect(() => {
		let lastScrollY = window.scrollY

		const updateScrollDirection = () => {
			const scrollY = window.scrollY
			const direction = scrollY > lastScrollY ? "down" : "up"
			if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
				setScrollDirection(direction)
			}
			lastScrollY = scrollY > 0 ? scrollY : 0
		}
		window.addEventListener("scroll", updateScrollDirection)

		return () => {
			window.removeEventListener("scroll", updateScrollDirection)
		}
	}, [scrollDirection])

	return scrollDirection
}

export default Header
