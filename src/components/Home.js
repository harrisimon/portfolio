import React, { useState, useEffect } from "react"
import harrisonProfile from "../imgs/harrisonProfile.jpg"
import { Icon } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"
// import { Button } from 'semantic-ui-css'

const Home = (props) => {
	const { handleClick, active } = props
	const navigate = useNavigate()
	const routeChange = () => {
		let path = `/about-me`
		navigate(path)
	}

	return (
		<div className="home">
			<div className="content">
				<div className="intro-picture">
					<div className="intro-container">
						<img
							className="harrisonPortrait"
							src={harrisonProfile}
							alt="A portrait of Harrison Simon"
						/>
						<div className="overlay">
							<div className="text">Hello!</div>
						</div>
					</div>

					<div className="intro-text">
						<p id="font" className="about-harrison">
							<span className="intro">
								Hi, I'm Harrison!{" "}
								<span className="milky" onClick={handleClick}>
									🌌
								</span>
							</span>
							<br /> I`m an innovative, thoughtful developer who
							ensures there is a human touch in all the code I
							write. My background as an educator, technologist,
							and artist inform how I solve problems with a
							creative and effective approach. Working on products
							that empower people to do more is my passion.
						</p>
					</div>
				</div>
			</div>
			<div className="milkyway"></div>
			<div className="about-background">
				<div className="tools">
					<div className="frontEnd">
						<Icon size="large" name="code"/>
						<h2>Front-End Development </h2>
						<ul>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>React.js</li>
							<li>Node.js</li>
							<li>Bootstrap UI</li>
							<li>Semantic UI</li>
						</ul>
					</div>
					<div className="backEnd">
						<h2>Back-End Development</h2>
						<ul>
							<li>Python</li>
							<li>MongoDB/Mongoose</li>
							<li>Express</li>
						</ul>
					</div>
				</div>
				<div className="homepage-footer">
					<div>
						<button onClick={routeChange} className="mybtns">
							More About
							<br /> Harrison
						</button>
					</div>
					<div>
						<button className="mybtns">Resume</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
