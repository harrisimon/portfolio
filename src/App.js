import "./App.css"
import Home from "./components/Home"
import Projects from "./components/Projects"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import NewHeader from "./components/NewHeader"
import milkyWay from "./imgs/milkywayatcapecod.jpg"
import { useState } from "react"

function App() {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive((current) => !current)
	}

	return (
		<div
			className="background"
			style={{
				backgroundImage: active ? `url(${milkyWay})` : "",
				transition: "all .5s ease",
				color: active ? "white" : "black",
				transition: "all .5s ease",
			}}
		>
			<BrowserRouter>
				<NewHeader />
				<Routes>
					<Route
						path="/"
						element={
							<Home active={active} handleClick={handleClick} />
						}
					/>
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>

			{/* <Segment className="about-me"></Segment> */}

			{/* <Contact /> */}
		</div>
	)
}

export default App
