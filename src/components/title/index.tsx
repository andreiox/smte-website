import * as React from 'react'

import * as styles from './Index.module.scss'

interface TitleProps { }

class Title extends React.Component<TitleProps, {}> {
	public render() {
		return (
			<div className={styles.content}>
				<div className={styles.bg_img_opacity} />
				<div className={styles.background_img} />
				<div className={styles.text_container}>
					<h1>
						TECNOLOGIA, CONSTRUÇÕES & MONTAGENS
            			<span />
					</h1>
				</div>
			</div>
		);
	}
}

export default Title;
