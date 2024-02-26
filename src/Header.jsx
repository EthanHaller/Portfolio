//https://www.codemzy.com/blog/react-sticky-header-disappear-scroll

import { useState, useEffect } from "react"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"
import "./styles/header.css"

function Header({ handleScroll }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 725)
	const scrollDirection = useScrollDirection()
	const [menuVisible, setMenuVisible] = useState(false)
	const [homeVisible, setHomeVisible] = useState(false)
	const [menuIconVisible, setMenuIconVisible] = useState(false)
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
		document.body.style.overflow = null
		setMenuVisible(false)
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

	useEffect(() => {
		const navItems = ["home", "about", "work", "projects", "contact"]

		if (!isMobile) {
			navItems.forEach((item, index) => {
				setTimeout(() => {
					switch (item) {
						case "home":
							setHomeVisible(true)
							break
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
				}, index * 200 + 3500)
			})
			setTimeout(() => {
				setMenuIconVisible(true)
			}, 4500)
		} else {
			setTimeout(() => {
				setHomeVisible(true)
			}, 4000)
			setTimeout(() => {
				setMenuIconVisible(true)
				setAboutVisible(true)
				setWorkVisible(true)
				setProjectsVisible(true)
				setContactVisible(true)
			}, 4500)
		}
	}, [])

	return (
		<>
			{isMobile ? (
				<>
					<div className={"spacer" + (menuVisible ? " show" : " hide")}></div>
					<div className={"nav-overlay" + (menuVisible ? " show" : " hide")}></div>
					<nav className={"mobile-header" + (menuVisible ? " expanded" : "")}>
						<div className="logo-menu-wrapper">
							<a href="#home" className="header-logo-wrapper" onClick={() => handleMobileScroll("home")}>
								<img src="/images/EHLogo.png" alt="App Logo" className={"header-logo" + (homeVisible ? " viewed" : " not-viewed")} />
							</a>
							{menuVisible ? (
								<IoCloseOutline
									className={"menu-icon" + (menuIconVisible ? " viewed" : " not-viewed")}
									onClick={() => toggleMenu()}
								></IoCloseOutline>
							) : (
								<IoMenu className={"menu-icon" + (menuIconVisible ? " viewed" : " not-viewed")} onClick={() => toggleMenu()}></IoMenu>
							)}
						</div>
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
					<a href="#home" className="header-logo-wrapper" onClick={() => handleScroll("home")}>
						<img src="/images/EHLogo.png" alt="App Logo" className={"header-logo" + (homeVisible ? " viewed" : " not-viewed")} />
					</a>
					<a href="#about" className={"nav-item" + (aboutVisible ? " viewed" : " not-viewed")} onClick={() => handleScroll("about")}>
						About
					</a>
					<a href="#work" className={"nav-item" + (workVisible ? " viewed" : " not-viewed")} onClick={() => handleScroll("work")}>
						Work
					</a>
					<a href="#projects" className={"nav-item" + (projectsVisible ? " viewed" : " not-viewed")} onClick={() => handleScroll("projects")}>
						Projects
					</a>
					<a href="#contact" className={"nav-item" + (contactVisible ? " viewed" : " not-viewed")} onClick={() => handleScroll("contact")}>
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
