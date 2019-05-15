import * as React from 'react'

import * as styles from './Index.module.scss'

interface FooterTopicProps {
	title: string,
	description: string,
}

class FooterTopic extends React.Component<FooterTopicProps, {}> {
	public render() {
		return (
			<div className={styles.container}>
				<span className={styles.title}>{this.props.title}</span>
				<span className={styles.description}>{this.props.description}</span>
			</div>
		);
	}
}

export default FooterTopic;
