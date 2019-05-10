import * as React from 'react'

import Header from '../components/header'
import Title from '../components/title'

interface IndexPageProps { }

class IndexPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <div>
                <Header />
                <Title />
            </div>
        )
    }
}

export default IndexPage
