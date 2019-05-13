import * as React from 'react'

import * as styles from './Index.module.scss'

interface ClientsProps { }

class Clients extends React.Component<ClientsProps, {}> {
	public render() {
		return (
			<div className={styles.clients_container}>
				<h1 id="clientes">
					clientes
					<span />
				</h1>
				<div className={styles.clients_list}>
					<div>
						<img src={'./img/clientes/banco_safra.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/decisao_contabilidade.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/fpt.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/grande_minas.png'}></img>
					</div>
				</div>
				<div className={styles.clients_list}>
					<div>
						<img src={'./img/clientes/precon.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/premium_saude.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/redecom.png'}></img>
					</div>
					<div>
						<img src={'./img/clientes/unimed_federacao_minas.png'}></img>
					</div>
				</div>
				<div className={styles.clients_list}>
					<div>
						<img src={'./img/clientes/unimed.png'}></img>
					</div>
				</div>
			</div>
		);
	}
}

export default Clients;
