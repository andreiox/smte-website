import * as React from 'react'

import * as styles from './Index.module.scss'

interface SolutionsProps { }

class Solutions extends React.Component<SolutionsProps, {}> {
	public render() {
		return (
			<div className={styles.solutions_container}>
				<a id="solucoes"></a>
				<h1>
					soluções
					<span />
				</h1>
				<div className={styles.solutions}>
					<div className={styles.solution}>
						<div className={styles.solution_content}>
							<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"></img>
							<h2>The best luxury hotels</h2>
							<h3>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</h3>
						</div>
					</div>
					<div className={styles.solution}>
						<div className={styles.solution_content}>
							<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"></img>
							<h2>The best luxury hotels</h2>
							<h3>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</h3>
						</div>
					</div>
					<div className={styles.solution}>
						<div className={styles.solution_content}>
							<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"></img>
							<h2>The best luxury hotels</h2>
							<h3>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Solutions;
