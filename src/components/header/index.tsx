import { withPrefix } from 'gatsby'
import * as React from 'react'

import * as styles from './Index.module.scss'

interface HeaderProps { }

class Header extends React.Component<HeaderProps, {}> {
    public render() {
        return (
            <div className={styles.header_container}>
                <div className={styles.header_contents}>
                    <div />
                    <img className={styles.logo} src={withPrefix('/img/logo.png')}></img>
                    <div />
                    <div className={styles.links}>
                        <a href='#'>INICIO</a>
                        <a href='#'>SOBRE</a>
                        <a href='#'>SOLUÇÕES</a>
                        <a href='#'>CASES</a>
                        <a href='#'>CONTATO</a>
                    </div>
                    <div />
                </div>
            </div>
        )
    }
}

export default Header
