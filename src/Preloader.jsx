import { useEffect, useState } from "react"
import "./styles/preloader.css"

function Preloader() {
    const [bgHidden, setBgHidden] = useState(false)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            setBgHidden(true)
            document.body.style.overflow = null
        }, 3000)
    },[])

    return (
        <div className={"preloader-background" + (bgHidden ? " hidden" : "")}>
            <div className="preloader-logo-container">
                <img src="src/images/EHLogo.png" alt="App Logo" className="preloader-logo" />
            </div>
        </div>
    )
}


export default Preloader