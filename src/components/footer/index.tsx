import * as React from 'react'

import FooterTopic from '../footer-topic'
import * as styles from './Index.module.scss'

interface FooterProps { }

class Footer extends React.Component<FooterProps, {}> {
	public render() {
		return (
			<div className={styles.footer_container}>
				<a id="contato"></a>
				<div className={styles.footer}>
					<div className={styles.logo_container}>
						<img className={styles.logo} src={'./img/logo.png'}></img>
					</div>
					<div className={styles.contatos}>
						<h2>Contatos</h2>
						<FooterTopic
							title="Email"
							description="smte@smte.com.br"
						/>
						<FooterTopic
							title="Telefone"
							description="+55 31 3458-5766"
						/>
						<FooterTopic
							title="Atendimento"
							description="Segunda à sexta de 08:00 as 18:00"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
