//https://www.codemzy.com/blog/react-sticky-header-disappear-scroll

import { useState, useEffect } from "react"
import "./styles/header.css"

function Header() {
	const scrollDirection = useScrollDirection()

	return (
		<>
			<div className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
				<div>Disappearing Header</div>
			</div>
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
		window.addEventListener("scroll", updateScrollDirection) // add event listener
		// return () => {
		// 	window.removeEventListener("scroll", updateScrollDirection) // clean up
		// }
	}, [scrollDirection])

	return scrollDirection
}

export default Header
