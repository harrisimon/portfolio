import React from "react"
import { Route, Router } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import GithubLight from "../imgs/GitHub_Logo_White.png"
import LinkedIn from "../imgs/LI-In-Bug.png"
import { Menu } from "semantic-ui-react"

const NewHeader = () => {
	return (
		<div className="header">
			<header className="top">
				<Link to="/" className="header-name">
					<h1 className="center">Harrison Simon</h1>
				</Link>
				<div className="nav-items">
					<Link smooth to="/pathLink#projects" className="nav-link">
						Projects
					</Link>

					<Link smooth to="/pathLink#skills" className="nav-link">
						Skills
					</Link>
					{/* <a
						href={`${process.env.PUBLIC_URL}/harrisonResume.pdf`}
						target="_blank"
						className="nav-link"
					>
						Resume
					</a> */}
				</div>
				<div className="bottom-items">
					<a
						className="nav-link"
						href="https://www.linkedin.com/in/harrison-simon-"
					>
						<img className="linkedIn" src={LinkedIn} />
					</a>
					<a
						className="nav-link"
						href="https://github.com/harrisimon"
					>
						<img className="github-logo-white" src={GithubLight} />
					</a>
				</div>
			</header>
		</div>
	)
}

export default NewHeader
