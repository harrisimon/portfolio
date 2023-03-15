import React from "react"
import { Icon, Container } from "semantic-ui-react"

const MyTools = () => {
	return (
		<Container>
			<div className="tools">
				<br />
				<h1 id="skills">
					<Icon size="small" name="computer" /> Skills <span></span>
					<Icon size="small" name="code" />
				</h1>
				<div className="skills">
					<div className="row1">
						<ul>
							<li>
								<Icon size="huge" name="js square"></Icon>
								<br />
								Javascript
							</li>
							<li>
								<Icon size="huge" name="html5"></Icon>
								<br />
								HTML
							</li>
							<li>
								<Icon size="huge" name="css3 alternate"></Icon>
								<br />
								CSS
							</li>
							<li>
								<Icon size="huge" name="react"></Icon>
								<br />
								React.js
							</li>
							<li>
								<Icon size="huge" name="node"></Icon>
								<br />
								Node.js
							</li>
							<li>
								<Icon size="huge" name="python"></Icon>
								<br />
								Python
							</li>
							<li>
								<Icon size="huge" className="devicon-numpy-original"></Icon>
								<br />
								Numpy
							</li>
							<li>
								<Icon size="huge" className="devicon-pandas-original"></Icon>
								<br />
								Pandas
							</li>
						</ul>
					</div>
					<br />
					<div className="row2">
						<ul>
							<li>
								<Icon
									className="devicon-django-plain"
									size="huge"
								/>
								<br />
								Django
							</li>
							<li>
								<Icon
									className="devicon-bootstrap-plain"
									size="huge"
								/>
								<br />
								Bootstrap UI
							</li>

							<li>
								<Icon
									className="devicon-mongodb-plain-wordmark"
									size="huge"
								/>
								<br />
								MongoDB
							</li>
							<li>
								<Icon
									className="devicon-express-original"
									size="huge"
								></Icon>
								<br />
								Express
							</li>
							<li>
								<Icon
									className="devicon-postgresql-plain"
									size="huge"
								></Icon>
								<br />
								PostgreSQL
							</li>
							<li>
								<Icon
									className="devicon-typescript-plain"
									size="huge"
								></Icon>
								<br />
								Typescript
							</li>
						</ul>
					</div>
				</div>
			</div>
			<br />
		</Container>
	)
}

export default MyTools
