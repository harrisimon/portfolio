import React from "react"
import sewerRat from "../imgs/sewerRat.jpg"
import movieLogger from "../imgs/movielogger.jpg"
import bampow from "../imgs/bampow.jpg"
import tinyweather from "../imgs/tinyweather.jpg"
import descriptions from "../projectDescriptions"
import { Container } from "semantic-ui-react"
import ProjectCard from "./ProjectCard"

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
						<ProjectCard
							title={"Bam Pow"}
							image={bampow}
							description={descriptions.bampow}
							loginName={"hero@super.com"}
							loginPassword={"Comics"}
							code={'https://github.com/harrisimon/react-comics'}
							deployedLink={'https://bampow.netlify.app/'}
						/>
						<ProjectCard
							title={"Tiny Weather"}
							image={tinyweather}
							description={descriptions.tinyWeather}
							loginName={"raincloud"}
							loginPassword={"rain"}
							code={'https://github.com/harrisimon/tiny-weather-api'}
							deployedLink={'https://tiny-weather.com/'}
						/>
					</div>

					<div className="row">
						<ProjectCard 
							title={'Movie Logger'}
							image={movieLogger}
							description={descriptions.movieLogger}
							loginName={'cine@movie.com'}
							loginPassword={'movie'}
							code={"https://github.com/harrisimon/movie-logger"}
							deployedLink={"https://movielogger.fly.dev/"}
						/>
						<ProjectCard 
							title={'Sewer Rat'}
							image={sewerRat}
							description={descriptions.sewerRat}
							deployedLink={"https://harrisimon.github.io/Sewer-Rat/"}
						/>
						
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Projects
