import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"

const Projects = () => {
	return (
		<>
				<h2 className="project-title">Recent Projects</h2>
			<div className="projects">

				<div className="project" id="sewer-rat">
					<h1>Sewer Rat</h1>
					<p>
						<a href="https://harrisimon.github.io/Sewer-Rat/">
							Link to Deployed Version
						</a>
					</p>
						<img
							src={sewerRat}
							id="image"
							alt="sewer rat game screen cap"
						/>
				</div>
				<div className="project" id="movie-logger">
					<h1>Movie Logger</h1>
					<img
						src={movieLogger}
						id="image"
						alt="movie logger screen cap"
					/>
				</div>
				<div className="project" id="quizard">
					<h1>Quizard</h1>
				</div>
				<div>
					<h1>Burger Stacker</h1>
				</div>
			</div>
			<div className="about-background"></div>
		</>
	)
}

export default Projects
