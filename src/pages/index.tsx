import * as React from 'react'

import About from '../components/about'
import Header from '../components/header'
import LineSeparator from '../components/line_separator'
import Solutions from '../components/solutions'
import Title from '../components/title'

interface IndexPageProps { }

class IndexPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <div>
                <Header />
                <Title />
                <About />
                <LineSeparator />
                <Solutions />
            </div>
        )
    }
}

export default IndexPage
