import * as React from 'react'

import * as styles from './Index.module.scss'

interface SolutionCardProps {
	title: string,
	description: string,
}

class SolutionCard extends React.Component<SolutionCardProps, {}> {
	public render() {
		return (
			<div className={styles.solution}>
				<div className={styles.solution_content}>
					<h2>{this.props.title}</h2>
					<h3>{this.props.description}</h3>
				</div>
			</div>

		);
	}
}

export default SolutionCard;
