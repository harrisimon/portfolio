import Home from "./components/Home"
import Projects from "./components/Projects"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import NewHeader from "./components/NewHeader"
import milkyWay from "./imgs/coldstorage.jpg"
import { Fragment, useState, useEffect } from "react"
import harrisonProfile from "./imgs/harrisonProfile.jpg"
import MySkills from "./components/MySkills"
import "./App.css"
import Footer from "./components/Footer"
import StarFloat from "./components/StarFloat"
import Resume from './components/Resume'

function App() {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive((current) => !current)
	}


	return (
		<>
			<Fragment>
				<BrowserRouter>
					<NewHeader />
					<StarFloat handleClick={handleClick} active={active}/>
					<div
						className="home"
						style={{
							backgroundImage: active ? `url(${milkyWay})` : "",
							color: active ? "white" : "",
							textShadow: active ? "1px 1px 2px black" : "",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							transition: "ease .95s",
						}}
					>
						<AboutMe
							harrisonProfile={harrisonProfile}
							handleClick={handleClick}
						/>
						<Projects />
						<MySkills />
						<Footer />
					</div>
					
				</BrowserRouter>

			</Fragment>
		</>

		// </div>
	)
}

export default App
