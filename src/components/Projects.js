import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"
import quizard from "../imgs/quizard.jpg"
import bampow from "../imgs/bampow.jpg"
import { HashLink as Link } from "react-router-hash-link"
import { Card, Container } from "semantic-ui-react"

const Projects = () => {
	return (
		<div className="project-background" id="projects">
			<h1 className="project-title">
				<br />
				Recent Projects
			</h1>
			<Container>
				<div className="projects">
					<div className="row">
						<div className="project" id="bampow">
							<h2 className="project-title">Bam Pow</h2>
							<img src={bampow} id="image" />
							<small className="app-description">
								A full-stack application designed for small
								comic shops to allow users to favorite comics,
								authors, illustrators and more to surface
								recommendations. Technologies include:
								PostgreSQL, Django, React
							</small>
							<div className="btn-container">
								<button className="mybtns">
									<a href="https://bampow.netlify.app/">
										Link to <br />
										Deployed Version
									</a>
								</button>
								<button className="mybtns">
									<a href="https://github.com/harrisimon/react-comics">
										Link to Code
									</a>
								</button>
							</div>
						</div>
						<div className="project" id="movie-logger">
							<h2 className="project-title">Movie Logger</h2>
							<img
								src={movieLogger}
								id="image"
								alt="movie logger screen cap"
							/>
							<small className="app-description">
								A full-stack Node app for logging, reviewing and
								discussing movies. User created resources are
								fully CRUD-able. Technologies include: Mongoose
								/ MongoDB, Liquid View templates
							</small>
							<div className="btn-container">
								<button className="mybtns">
									<a href="https://movielogger.fly.dev/">
										Link to <br />
										Deployed Version
									</a>
								</button>
								<button className="mybtns">
									<a href="https://github.com/harrisimon/movie-logger">
										Link to Code
									</a>
								</button>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="project" id="quizard">
							<h2 className="project-title">Quizard</h2>
							<img src={quizard} id="image" />
							<small className="app-description">
								A full-stack application where users can login
								to play trivia quizzes either from user
								submissions or by an API. Technologies include:
								React, Mongoose/MongoDB
							</small>
							<button className="mybtns">
								<a href="https://quizard-by-tuneheads.netlify.app/">
									Link to <br />
									Deployed Version
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
							<small className="app-description">
								An HTML5 canvas based (vanilla JS, HTML CSS)
								browser game.
							</small>
							<button className="mybtns">
								<a href="https://harrisimon.github.io/Sewer-Rat/">
									Link to <br />
									Deployed Version
								</a>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Projects
