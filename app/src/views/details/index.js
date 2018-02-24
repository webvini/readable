import React from 'react';

import Header from './../../header';
import Menu from './../../menu';
import FullArticle from './../../components/full-article'

class Details extends React.Component {
    render() {
        const { history } = this.props
        const { location } = history
        const { articleID } = location.state

        return (
            <React.Fragment>
                <Header />
                <Menu history={history} />

                <section className="details-page-wrapper">
                    <FullArticle articleID={articleID} />
                </section>
            </React.Fragment>
        )
    }
}

export default Details