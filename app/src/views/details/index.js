import React from 'react';

import Header from './../../header';
import Menu from './../../menu';
import FullArticle from './../../components/full-article'

class Details extends React.Component {
    render() {
        const { history } = this.props
        const { location } = history
        const { article } = location.state

        return (
            <React.Fragment>
                <Header />
                <Menu history={history} />

                <section className="details-page-wrapper">
                    <FullArticle article={article} />
                </section>
            </React.Fragment>
        )
    }
}

export default Details