import { useEffect, useState } from "react"
import avatar from "./images/avatar.png"
import "./styles/home.css"

function Home({ innerRef }) {
	const [helloTextVisible, setHelloTextVisible] = useState(false)
	const [nameVisible, setNametVisible] = useState(false)
	const [mottoTextVisible, setMottoTextVisible] = useState(false)
	const [avatarVisible, setAvatarVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setHelloTextVisible(true)
		}, 4700)
		setTimeout(() => {
			setNametVisible(true)
		}, 4900)
		setTimeout(() => {
			setMottoTextVisible(true)
		}, 5100)
		setTimeout(() => {
			setAvatarVisible(true)
		}, 5300)
	}, )

	return (
		<>
			<section className="home-block container" ref={innerRef}>
				<div className="home-text">
					<p className={"hello-text" + (helloTextVisible ? " viewed" : " not-viewed")}>Hello, my name is </p>
					<h1 className={"name" + (nameVisible ? " viewed" : " not-viewed")}>Ethan Haller</h1>
					<p className={"motto-text" + (mottoTextVisible ? " viewed" : " not-viewed")}>
						I am a versatile software engineer specializing in full stack web applications, with a passion for self-improvement. Currently, I do
						BLANK at <a href="https://www.yext.com/" target="_blank">Yext</a>.
					</p>
				</div>
				<div className="home-picture">
					<img src={avatar} alt="avatar" className={"avatar" + (avatarVisible ? " viewed" : " not-viewed")}></img>
				</div>
			</section>
		</>
	)
}

export default Home
