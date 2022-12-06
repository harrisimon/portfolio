import React from "react"
import { Link } from 'react-router-dom'
import mailTo from './mailTo'
import ButtonMailto from "./mailTo"


const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="contact">
                        <ButtonMailto className='mybtns'label="Contact me" mailto="mailto:harrisimon@example.com" />
				</div>
			</div>
            
		</>
	)
}
export default Footer
