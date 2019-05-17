import * as React from 'react'

import About from '../components/about'
import Clients from '../components/clients'
import Footer from '../components/footer'
import Header from '../components/header'
import LineSeparator from '../components/line_separator'
import Solutions from '../components/solutions'
import Title from '../components/title'

interface IndexPageProps { }

class IndexPage extends React.Component<IndexPageProps, {}> {
    componentDidMount() {
        document.title = "SMte Tecnologia, Construções & Montagens"
    }
    public render() {
        return (
            <div>
                <Header />
                <Title />
                <About />
                <Solutions />
                <Clients />
                <Footer />
            </div>
        )
    }
}

export default IndexPage
