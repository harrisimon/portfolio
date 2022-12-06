import React from "react"
import { Link } from 'react-router-dom'
import mailTo from './mailTo'
import ButtonMailto from "./mailTo"

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="resume">
					<button className="mybtns">My resume</button>
				</div>
				<div className="contact">
                        <ButtonMailto className='mybtns'label="Contact me" mailto="mailto:no-reply@example.com" />
				</div>
			</div>
            
		</>
	)
}
export default Footer
