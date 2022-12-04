import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"
import { HashLink as Link } from "react-router-hash-link"
import { Card } from "semantic-ui-react"

const Projects = () => {
	return (
		<div className="project-background" id="projects">
			<h1 className="project-title">Recent Projects</h1>

			<div className="projects">
				<div className="row">
					<div className="project" id="movie-logger">
						<h2 className="project-title">Movie Logger</h2>
						<img
							src={movieLogger}
							id="image"
							alt="movie logger screen cap"
						/>
						<small className="app-description">
							A full-stack Node app for logging, reviewing and
							discussing movies. User created resources are fully
							CRUD-able. Technologies include: Mongoose / MongoDB,
							Liquid View templates
						</small>
						<button className="mybtns">
							<a href="https://movielogger.fly.dev/">
								Link to Deployed Version
							</a>
						</button>
					</div>

					<div className="project" id="sewer-rat">
						<h2 className="project-title">Sewer Rat</h2>
						<img
							src={sewerRat}
							id="image"
							alt="sewer rat game screen cap"
						/>
						<p className="app-description">
							An HTML5 canvas based (vanilla JS, HTML CSS) browser
							game.
						</p>
						<button className="mybtns">
							<a href="https://harrisimon.github.io/Sewer-Rat/">
								Link to Deployed Version
							</a>
						</button>
					</div>
				</div>

				<div className="row">
					<div className="project" id="quizard">
						<h2 className="project-title">Quizard</h2>
						<p className="app-description">
							A full-stack application where users can login to play game either 
						</p>
						<button className="mybtns">
							<a href="https://harrisimon.github.io/Sewer-Rat/">
								Link to Deployed Version
							</a>
						</button>
					</div>
					<div className="project" id="bampow">
						<h2 className="project-title">Bam Pow</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
