import { Icon } from "semantic-ui-react"
const ProjectCard = ({
	title,
	description,
	loginName,
	loginPassword,
	deployedLink,
	code,
	image,
}) => {
	let login
	if (loginName !== undefined) {
		login = (
			<div>
				<h2>Example Login</h2>
				<br />
				User: {loginName}
				<br /> pw: {loginPassword}
			</div>
		)
	}

	return (
		<div className="project">
			<h2 className="project-title">{title}</h2>
			<img src={image} alt="project" id="image" />
			<small className="app-description">{description}</small>
			<small className="app-description">{login}</small>
			<div className="btn-container">
				<button className="mybtns">
					<a href={deployedLink}>Deployed Version</a>
				</button>
				<button className="mybtns">
					<a href={code}>
						<span>Code </span>
						<span>
							<Icon size="small" name="code" />
						</span>
					</a>
				</button>
			</div>
		</div>
	)
}

export default ProjectCard
