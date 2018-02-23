import React from 'react';

import Header from './../../header';
import Menu from './../../menu';

class Details extends React.Component {
    render() {
        const { history } = this.props

        return (
            <React.Fragment>
                <Header />
                <Menu history={history} />

                <section className="details-page-wrapper">
                    <h1>Bacon</h1>
                </section>
            </React.Fragment>
        )
    }
}

export default Details