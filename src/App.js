import logo from "./logo.svg"
import "./App.css"
import AboutMe from "./components/AboutMe"
import MyTools from "./components/MyTools"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import harrisonProfile from "./imgs/harrisonProfile.jpg"
import { Grid, Container, Segment, Menu } from "semantic-ui-react"


function App() {
	return (
		<>
			<div className="header">
				<a href="/" className="header-name">
					<h1>Harrison Simon</h1>
				</a>
				<div className="nav-items">
					<a class="nav-link">About Me</a>
          <a class="nav-link">Projects</a>
				</div>
			</div>

			<Segment className="about-me">
				<AboutMe />
			</Segment>
			{/* <Segment className="page-content">
				<MyTools />
			</Segment>
			<Segment className="page-content">
				<Portfolio />
			</Segment> */}
			<Contact />
		</>
	)
}

export default App
