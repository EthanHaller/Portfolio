import { useEffect, useState } from "react"
import "../styles/preloader.sass"

function Preloader() {
	const [bgHidden, setBgHidden] = useState(false)

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

		if (prefersReducedMotion) {
			setBgHidden(true)
			document.body.style.overflow = null
			return
		}

		document.body.style.overflow = "hidden"
		setTimeout(() => {
			setBgHidden(true)
			document.body.style.overflow = null
		}, 3000)
	}, [])

	return (
		<div className={"preloader-background" + (bgHidden ? " hidden" : "")} role="status" aria-live="polite" aria-label="Loading site content">
			<div className="preloader-logo-container">
				<img src="/images/EHLogo.png" alt="" aria-hidden="true" className="preloader-logo" />
			</div>
		</div>
	)
}

export default Preloader
