import React from "react"
import harrisonProfile from "../imgs/harrisonProfile.jpg"

const AboutMe = () => {
	return (
		<div>
			
			<div class="container">
                <img
                    className="harrisonPortrait"
                    src={harrisonProfile}
                    alt="A portrait photo of Harrison Simon"
                />
				<div class="overlay">
					<div class="text">Hello!</div>
				</div>
			</div>

             <div className="about-me">
                <p>
                    Hi my name is Harrison and I'm a fullstack software developer.
                </p>
             </div>
		</div>
	)
}

export default AboutMe
