import React from "react"
import harrisonProfile from "../imgs/harrisonProfile.jpg"
import { Grid, Button, Container, GridColumn, Segment } from "semantic-ui-react"

const AboutMe = () => {
	return (
		<Segment>
			<div className="content">
				<div className="about-container">
					<img
						className="harrisonPortrait"
						src={harrisonProfile}
						alt="A portrait photo of Harrison Simon"
					/>
					<div className="overlay">
						<div className="text">Hello!</div>
					</div>
				</div>

				<div>
					<p id="font" className="about-harrison">
						Hi my name is Harrison and I'm a fullstack software
						developer.
					</p>
				</div>
			</div>

			<div className="about-background"></div>
		</Segment>
	)
}

export default AboutMe
