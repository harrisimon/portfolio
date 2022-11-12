import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"

const Portfolio = () => {
	return (
		<>
			<h3>Projects</h3>
			<div id="sewer-rat">
				<h1>Sewer Rat</h1>
				<p>
					<a href="https://harrisimon.github.io/Sewer-Rat/">
						Link to Deployed Version
					</a>
					<img
						src={sewerRat}
						id="image"
						alt="sewer rat game screen cap"
					/>
				</p>
			</div>
			<div id="movie-logger">
				<h1>Movie Logger</h1>
				<img
					src={movieLogger}
					id="image"
					alt="movie logger screen cap"
				/>
			</div>
			<div id="quizard">
				<h1>Quizard</h1>
			</div>
			<div>
				<h1>Burger Stacker</h1>
			</div>
		</>
	)
}

export default Portfolio
