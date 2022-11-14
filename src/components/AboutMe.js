import React from "react"
import harrisonPortrait from "../imgs/harrisonPortrait.jpeg"

const AboutMe = () => {
	return (
		<>
			<div className="about-me-body">
				<img className="portrait" src={harrisonPortrait} />
				About me: just a baby
			</div>
			<div className="about-background"></div>
		</>
	)
}

export default AboutMe
