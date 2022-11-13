import React from "react"
import { Link, Route, Router } from "react-router-dom"
import GithubLight from '../imgs/GitHub_Logo_White.png'
import LinkedIn from '../imgs/LI-In-Bug.png'


const NewHeader = () => {
	return (
		<div className="header">
			<Link to="/" className="header-name">
				<p>Harrison Simon</p>
			</Link>

			<div className="nav-items">
				<Link to="/about-me" className="nav-link">
					About Me
				</Link>
				<Link to="/projects" className="nav-link">
					Projects
				</Link>
				<a className="nav-link" href="https://www.linkedin.com/in/harrison-simon-"><img className="linkedIn" src={LinkedIn}/></a>
                <a className="nav-link" href="https://github.com/harrisimon"><img className="github-logo-white" src={GithubLight}/></a>
			</div>
		</div>
	)
}

export default NewHeader
