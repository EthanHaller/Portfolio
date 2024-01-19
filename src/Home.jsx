import { useState } from "react"
import avatar from "./images/avatar.png"
import "./styles/home.css"

function Home() {
	return (
		<>
			<div className="home-block">
				<div className="home-text">
					<p className="hello-text">Hello, my name is </p>
					<h1 className="name">Ethan Haller</h1>
					<p className="motto-text">
						I am a versatile software engineer specializing in full stack web applications, with a passion for self-improvement. Currently, I do
						BLANK at <a href="https://www.yext.com/">Yext</a>.
					</p>
				</div>
				<div className="home-picture">
					<img src={avatar} alt="avatar" className="avatar"></img>
				</div>
			</div>
		</>
	)
}

export default Home
