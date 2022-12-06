import React from "react"
import { Link } from "react-router-dom"

const ButtonMailto = ({ mailto, label }) => {
	return (
		<button className="mybtns">
			<Link
				to="#"
				onClick={(e) => {
					window.location.href = mailto
					e.preventDefault()
				}}
			>
				{label}
			</Link>
		</button>
	)
}

export default ButtonMailto
