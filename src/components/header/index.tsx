import * as React from 'react'

import * as styles from './Index.module.scss'

interface HeaderProps { }

class Header extends React.Component<HeaderProps, {}> {
    public render() {
        return (
            <div className={styles.header_container}>
                <div className={styles.header_contents} id="inicio">
                    <div />
                    <img className={styles.logo} src={'./img/logo.png'}></img>
                    <div />
                    <div className={styles.links}>
                        <a href='#sobre'>SOBRE</a>
                        <a href='#solucoes'>SOLUÇÕES</a>
                        <a href='#clientes'>CLIENTES</a>
                        <a href='#contato'>CONTATO</a>
                    </div>
                    <div />
                </div>
            </div>
        )
    }
}

export default Header
