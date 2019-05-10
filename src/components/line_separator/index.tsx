import * as React from 'react'

import * as styles from './Index.module.scss'

interface LineSeparatorProps { }

class LineSeparator extends React.Component<LineSeparatorProps, {}> {
	public render() {
		return (
			<div className={styles.line_container}>
				<span />
			</div>
		);
	}
}

export default LineSeparator;
