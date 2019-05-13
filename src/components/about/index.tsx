import * as React from 'react'

import * as styles from './Index.module.scss'

interface AboutProps { }

class About extends React.Component<AboutProps, {}> {
	public render() {
		return (
			<div className={styles.about_container}>
				<h1 id="sobre">
					sobre nós
					<span />
				</h1>
				<div className={styles.about_text}>
					<p>Nós somos uma empresa especializada no segmento de prestação de serviços nas áreas de telecomunicações, eletricidade e construções.</p>
					<p>Nosso principal diferencial é a experiência. Há mais de 10 anos treinamos e capacitamos nossa equipe.</p>
					<p>Somos dotados de um valioso patrimônio técnico-humano, cuidadosamente selecionado e treinado para prestar serviços com alto padrão de qualidade e eficiência que atendam plenamente as expectativas e exigências de nossos clientes.</p>
				</div>
			</div>
		);
	}
}

export default About;
