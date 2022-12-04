import React from "react";
import { Icon } from "semantic-ui-react"



const MyTools = () => {


    return(
        <>
           <div className="tools"><br/>
			<h1 id="skills"><Icon size="small" name="computer" /> My Skills <Icon size="small" name="code" /></h1>
					<div className="frontEnd">
						
						<h2>Front-End Development </h2>
						<ul>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>React.js</li>
							<li>Node.js</li>
							<li>Bootstrap UI</li>
							<li>Semantic UI</li>
						</ul>
					</div>
					<div className="backEnd">
						<h2>Back-End Development</h2>
						<ul>
							<li>Python</li>
							<li>Django</li>
							<li>MongoDB/Mongoose</li>
							<li>Express</li>
						</ul>
					</div>
				</div>
				<br />
        </>
    )
}

export default MyTools