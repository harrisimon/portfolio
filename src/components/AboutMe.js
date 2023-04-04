import React from "react"

const AboutMe = (props) => {
	const { harrisonProfile } = props
	return (
		<>
			<div className="content">
				<div className="intro-picture">
					<div className="intro-container">
						<img
							className="harrisonPortrait"
							src={harrisonProfile}
							alt="A portrait of Harrison Simon"
						/>
						<div className="overlay">
							<div className="text">Hello!</div>
						</div>
					</div>

					<div className="intro-text">
						<p id="font" className="about-harrison">
							<span className="intro">
								Hi, I'm Harrison!{" "}
								{/* <span className="milky" onClick={handleClick}>
									🌌
								</span> */}
							</span>
							<br /> I`m an innovative, thoughtful developer who
							ensures there is a human touch in all the code I
							write. My background as an educator, technologist,
							and artist informs how I solve problems with a
							creative and effective approach. Working on products
							that empower people to do more is my passion.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="about-me-body">
				<img className="portrait" src={harrisonPortrait} />
				About me: just a baby
			</div>
			<div className="about-background"></div> */}
		</>
	)
}

export default AboutMe
