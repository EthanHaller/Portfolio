//https://www.codemzy.com/blog/react-sticky-header-disappear-scroll

import { useState, useEffect } from "react"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"
import "./styles/header.css"

function Header({ handleScroll }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 725)
	const scrollDirection = useScrollDirection()
	const [menuVisible, setMenuVisible] = useState(false)
	const [aboutVisible, setAboutVisible] = useState(false)
	const [workVisible, setWorkVisible] = useState(false)
	const [projectsVisible, setProjectsVisible] = useState(false)
	const [contactVisible, setContactVisible] = useState(false)

	const toggleMenu = () => {
		const navItems = ["about", "work", "projects", "contact"]

		if (menuVisible) {
			document.body.style.overflow = null
			navItems.forEach((item, index) => {
				setTimeout(() => {
					switch (item) {
						case "about":
							setAboutVisible(false)
							break
						case "work":
							setWorkVisible(false)
							break
						case "projects":
							setProjectsVisible(false)
							break
						case "contact":
							setContactVisible(false)
							break
						default:
							break
					}
				}, index * 100)
			})
			setMenuVisible(false)
		} else {
			document.body.style.overflow = "hidden"
			setMenuVisible(true)
			navItems.forEach((item, index) => {
				setTimeout(() => {
					switch (item) {
						case "about":
							setAboutVisible(true)
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
						default:
							break
					}
				}, index * 100 + 500)
			})
		}
	}

	const handleMobileScroll = (section) => {
		toggleMenu()
		handleScroll(section)
	}

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 725)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [menuVisible])

	return (
		<>
			{isMobile ? (
				<>
					<div className={"spacer" + (menuVisible ? " show" : " hide")}></div>
					<div className={"nav-overlay" + (menuVisible ? " show" : " hide")}></div>
					<nav className={"mobile-header" + (menuVisible ? " expanded" : "")}>
						{menuVisible ? (
							<IoCloseOutline className="menu-icon" onClick={() => toggleMenu()}></IoCloseOutline>
						) : (
							<IoMenu className="menu-icon" onClick={() => toggleMenu()}></IoMenu>
						)}
						<div className={"nav-items" + (menuVisible ? " show" : " hide")}>
							<a href="#about" className={`nav-item-mobile ${aboutVisible ? "show" : ""}`} onClick={() => handleMobileScroll("about")}>
								About
							</a>
							<a href="#work" className={`nav-item-mobile ${workVisible ? "show" : ""}`} onClick={() => handleMobileScroll("work")}>
								Work
							</a>
							<a href="#projects" className={`nav-item-mobile ${projectsVisible ? "show" : ""}`} onClick={() => handleMobileScroll("projects")}>
								Projects
							</a>
							<a href="#contact" className={`nav-item-mobile ${contactVisible ? "show" : ""}`} onClick={() => handleMobileScroll("contact")}>
								Contact
							</a>
						</div>
					</nav>
				</>
			) : (
				<nav className={"header" + (scrollDirection === "down" ? " hide" : " show")}>
					<a href="#about" className="nav-item" onClick={() => handleScroll("about")}>
						About
					</a>
					<a href="#work" className="nav-item" onClick={() => handleScroll("work")}>
						Work
					</a>
					<a href="#projects" className="nav-item" onClick={() => handleScroll("projects")}>
						Projects
					</a>
					<a href="#contact" className="nav-item" onClick={() => handleScroll("contact")}>
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
	}, [scrollDirection])

	return scrollDirection
}

export default Header
