import React from "react"
const StarFloat = (props) => {
	const {handleClick, active} = props
	let icon 
	console.log(active)
	active ?  icon = '☀️': icon = '🌌' 
	return (
		<div className="floatSwitch" onClick={handleClick}>
			<span className='milky'>{icon}</span>
			
		</div>
	)
}

export default StarFloat
