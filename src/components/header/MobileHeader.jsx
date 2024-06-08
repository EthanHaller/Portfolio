import { useEffect, useState } from "react"
import { IoMenu } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"

export default function MobileHeader({ handleScroll, revealed }) {
	const [menuVisible, setMenuVisible] = useState(false)
	const [homeVisible, setHomeVisible] = useState(revealed)
	const [menuIconVisible, setMenuIconVisible] = useState(revealed)

	const handleMobileScroll = (section) => {
		document.body.style.overflow = null
		handleScroll(section)
        setMenuVisible(false)
	}

	useEffect(() => {
		if (!revealed) {
			setTimeout(() => {
				setHomeVisible(true)
			}, 4250)
			setTimeout(() => {
				setMenuIconVisible(true)
			}, 4500)
		}
	})

	const toggleMenu = () => {
		if (menuVisible) {
			document.body.style.overflow = null
			setMenuVisible(false)
		} else {
			document.body.style.overflow = "hidden"
			setMenuVisible(true)
		}
	}

	return (
		<>
			<div className={"spacer" + (menuVisible ? " show" : " hide")}></div>
			<div className={"nav-overlay" + (menuVisible ? " show" : " hide")}></div>
			<nav className={"mobile-header" + (menuVisible ? " expanded" : "")}>
				<div className="logo-menu-wrapper">
					<a href="#home" className="header-logo-wrapper" onClick={() => handleMobileScroll("home")}>
						<img src="/images/EHLogo.png" alt="App Logo" className={"header-logo" + (homeVisible ? " viewed" : " not-viewed")} />
					</a>
					{menuVisible ? (
						<IoCloseOutline className={"menu-icon nav-item" + (menuIconVisible ? " viewed" : " not-viewed")} onClick={() => toggleMenu()}></IoCloseOutline>
					) : (
						<IoMenu className={"menu-icon nav-item" + (menuIconVisible ? " viewed" : " not-viewed")} onClick={() => toggleMenu()}></IoMenu>
					)}
				</div>
				<div className={"nav-items" + (menuVisible ? " show" : " hide")}>
					<a href="#work" className={`nav-item-mobile ${menuVisible ? "show" : "hide"}`} onClick={() => handleMobileScroll("work")}>
						Work
					</a>
					<a href="#projects" className={`nav-item-mobile ${menuVisible ? "show" : "hide"}`} onClick={() => handleMobileScroll("projects")}>
						Projects
					</a>
					<a href="#contact" className={`nav-item-mobile ${menuVisible ? "show" : "hide"}`} onClick={() => handleMobileScroll("contact")}>
						Contact
					</a>
					<a href="/EthanHallerResume.pdf" target="_blank" className={`nav-item-mobile ${menuVisible ? "show" : "hide"}`}>
						Resume
					</a>
				</div>
			</nav>
		</>
	)
}
