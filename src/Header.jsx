//https://www.codemzy.com/blog/react-sticky-header-disappear-scroll

import { useState, useEffect } from "react"
import "./styles/header.css"

function Header({ handleScroll }) {
	const scrollDirection = useScrollDirection()

	return (
		<>
			<nav className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
				<a href="#about" className="nav-item" onClick={() => handleScroll("about")}>About</a>
				<a href="#work" className="nav-item" onClick={() => handleScroll("work")}>Work</a>
				<a href="#projects" className="nav-item" onClick={() => handleScroll("projects")}>Projects</a>
				<a href="#contact" className="nav-item" onClick={() => handleScroll("contact")}>Contact</a>
			</nav>
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
	}, [scrollDirection])

	return scrollDirection
}

export default Header
