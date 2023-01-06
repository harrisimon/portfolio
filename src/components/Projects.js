import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"
import quizard from "../imgs/quizard.jpg"
import bampow from "../imgs/bampow.jpg"
import tinyweather from "../imgs/tinyweather.jpg"
import { HashLink as Link } from "react-router-hash-link"
import { Card, Container, Icon } from "semantic-ui-react"

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
							<small className="app-description">
								<h2>Example Login</h2>
								<br />
								User: hero@super.com
								<br /> pw: Comics
							</small>
							<div className="btn-container">
								<button className="mybtns">
									<a href="https://bampow.netlify.app/">
										Deployed Version
									</a>
								</button>
								<button className="mybtns">
									<a href="https://github.com/harrisimon/react-comics">
										<span>Code </span>
										<span>
											<Icon size="small" name="code" />
										</span>
									</a>
								</button>
							</div>
						</div>
						<div className="project" id="tinyweather">
							<h2 className="project-title">Tiny Weather</h2>
							<img
								src={tinyweather}
								id="image"
								alt="tiny weather screen cap"
							/>
							<small className="app-description">
								A full-stack Mongoose-Express-React-Node app for
								displaying weather readings taken from a homemade Raspberry Pi weather station. Users can sign up to make posts for each weather reading as a diary / semi-disposable journal. Users can also view all their individual post history.
							</small>
							<div className="btn-container">
								<button className="mybtns">
									<a href="https://tiny-weather.com">
										Deployed Version
									</a>
								</button>
								<button className="mybtns">
									<a href="https://github.com/harrisimon/tiny-weather-api">
										<span>Code </span>
										<span>
											<Icon size="small" name="code" />
										</span>
									</a>
								</button>
							</div>
						</div>
					</div>

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
								discussing movies. User created resources are
								fully CRUD-able. Technologies include: Mongoose
								/ MongoDB, Liquid View templates
							</small>
							<small className="app-description">
								<h2>Example Login</h2>
								<br />
								User: cine@movie.com
								<br /> pw: movie
							</small>
							<div className="btn-container">
								<button className="mybtns">
									<a href="https://movielogger.fly.dev/">
										Deployed Version
									</a>
								</button>
								<button className="mybtns">
									<a href="https://github.com/harrisimon/movie-logger">
										<span>Code </span>
										<span>
											<Icon size="small" name="code" />
										</span>
									</a>
								</button>
							</div>
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
