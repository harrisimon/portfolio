import React from "react"
import harrisonProfile from "../imgs/harrisonProfile.jpg"
import { useNavigate } from "react-router-dom"
import Projects from "./Projects"
import Footer from "./Footer"
import milkyWay from "../imgs/milkywayatcapecod.jpg"
import AboutMe from "./AboutMe"
import NewHeader from "./NewHeader"
import StarFloat from "./StarFloat"
// import { Button } from 'semantic-ui-css'

const Home = (props) => {
	const { handleClick, active } = props
	const navigate = useNavigate()
	const routeChange = () => {
		let path = `/about-me`
		navigate(path)
	}
	const name = 'Harrison Simon'
	return (
		<div className="background" id="root">
	
			<div className="home">
				<NewHeader />
				<div className="milkyway"></div>
				
				<AboutMe
					harrisonProfile={harrisonProfile}
					handleClick={handleClick}
				/>
				<Projects id="projects" />
		
				<Footer />
				<div className="homepage-footer">
					<div>
						<button onClick={routeChange} className="mybtns">
							More About
							<br /> Harrison
						</button>
					</div>
					<div>
						<button className="mybtns">Resume</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
