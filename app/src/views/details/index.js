import React from 'react';

import Header from './../../header';
import Menu from './../../menu';
import FullArticle from './../../components/full-article'

class Details extends React.Component {
    render() {
        const { history } = this.props

        return (
            <React.Fragment>
                <Header />
                <Menu history={history} />

                <section className="details-page-wrapper">
                    <FullArticle />
                </section>
            </React.Fragment>
        )
    }
}

export default Details