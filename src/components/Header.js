import React from "react"
import { Route, Link, Router, Switch } from "react-router-dom"
import GithubLight from '../imgs/GitHub_Logo_White.png'

const Header = () => {
	return (
		<>
		

		<div className="header">
			<a href="/" className="header-name">
				<h1>Harrison Simon</h1>
			</a>
			<div className="nav-items">
				<a class="nav-link" href="/about-me">About Me</a>
				<a href='/projects' class="nav-link">Projects</a>
				<a
					href="https://www.linkedin.com/in/harrison-simon-"
					
					class="nav-link"
				>
					LinkedIn
				</a>
				
				<a href="https://github.com/harrisimon" class="nav-link">
					<img src={GithubLight}/>
				</a>
			</div>
		</div>
		</>
	)
}

export default Header
