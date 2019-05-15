import * as React from 'react'

import SolutionCard from '../card/solution'
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
					<SolutionCard
						title={'Análise de redes'}
						description={'Através dos nossos serviços de Análise de Rede, oferecemos aos nossos clientes um diagnóstico do ambiente de rede e estatística de performance para avaliar o foco do problema e as possíveis soluções.'}
					/>
					<SolutionCard
						title={'Cabeamento Estruturado'}
						description={'Projeto e execução. Instalação física de Rede de Dados/Voz em Rack com Path Panel, usando categoria 5, 5E, 6 ou Fibra óptica. Cabeamento por dutos, canaletas ou via piso elevado.'}
					/>
					<SolutionCard
						title={'Construções'}
						description={'Obras em Clínicas Médicas e Laboratoriais, Obras Industriais, Edificações Comerciais, Serviços de infra-estrutura interna e externa, Construção e Reformas, Data Centers e Call Centers.'}
					/>
				</div>
				<div className={styles.solutions}>
					<SolutionCard
						title={'Telecomunicações'}
						description={'Planejamento, Implantação e Manutenção de Cabeamento Estruturado, Backbone, Redes Lógicas e Físicas, Redes Industriais.'}
					/>
					<SolutionCard
						title={'Projetos Especiais'}
						description={'Engenharia Elétrica, Projetos de Iluminação, Centro de Gerência de Redes, Ambientes Corporativos, Salas Multimídias.'}
					/>
					<SolutionCard
						title={'Consultoria'}
						description={'Projetos de redes convergentes; Projetos de Routing e Switching; Planos de Segurança; Análise de LAN e WAN; Plano de Contigência.'}
					/>
				</div>
				<div className={styles.solutions}>
					<SolutionCard
						title={'Engenharia de Instalações'}
						description={'Sistema de controle de acesso; Sistema de combate a incêndio; Grupo Motor Gerador (GMG); No Breaks; Barramento Blindado; Climatização; Sistema de Proteção Contra Descarga Atmosférica (SPDA); Rede Estabilizada; Comutação.'}
					/>
					<SolutionCard
						title={'Routing e Switching'}
						description={'Nossos projetos e serviços profissionais de routing e switching, oferecem alta performance para as aplicações, como também permitem criar uma infra-estrutura capaz de suportar a convergência de voz, vídeo e dados, segurança, qualidade de serviço (QoS) e gerenciamento.'}
					/>
					<SolutionCard
						title={'Wireless'}
						description={'Nossa equipe especializada está apta a oferecer serviços profissionais em Wireless, que vão desde a elaboração de um projeto, passando pelo Site Survery, até a implementação do projeto de rede.'}
					/>
				</div>
			</div>
		);
	}
}

export default Solutions;
