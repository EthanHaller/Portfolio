import { useEffect, useState } from "react"
import "..//styles/home.css"

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
	})

	return (
		<>
			<section className="home-block container" ref={innerRef}>
				<div className="home-text">
					<p className={"hello-text" + (helloTextVisible ? " viewed" : " not-viewed")}>Hello, my name is </p>
					<h1 className={"name" + (nameVisible ? " viewed" : " not-viewed")}>Ethan Haller</h1>
					<p className={"motto-text" + (mottoTextVisible ? " viewed" : " not-viewed")}>
						I am a versatile software engineer with a passion for full-stack development. Most recently, I worked with React, TypeScript, and Go at{" "}
						<a className="link" href="https://www.yext.com/" target="_blank">
							Yext
						</a>
						.
					</p>
				</div>
				<div className={"home-picture" + (avatarVisible ? " viewed" : " not-viewed")}>
					<span />
					<img src="/images/headshot.png" alt="avatar" className="avatar"></img>
				</div>
			</section>
		</>
	)
}

export default Home
