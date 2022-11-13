import logo from "./logo.svg"
import "./App.css"
import Home from "./components/Home"
import MyTools from "./components/MyTools"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import harrisonProfile from "./imgs/harrisonProfile.jpg"
import { Grid, Container, Segment, Menu } from "semantic-ui-react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import NewHeader from "./components/NewHeader"

function App() {
	return (
		<>
			<BrowserRouter>
				<NewHeader />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>


			{/* <Segment className="about-me"></Segment> */}

			{/* <Contact /> */}
		</>
	)
}

export default App
