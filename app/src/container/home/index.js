import React from 'react';

import Constants from './../../utils/constants'

import Article from './../../components/article/index'
import Notice from './../../components/notice/index'

class HomePage extends React.Component {

    state = {
        articles: [
        ]
    }

    render() {
        const { articles } = this.state;

        return (
            <section className="home-page-wrapper">
                <div className="inner">

                    { articles.length > 0 ? 
                        <Article articles={articles} />
                    :
                        <Notice
                            type={Constants.notice.type.warning}
                            message={Constants.messages.noArticle}
                        />
                    }

                </div>
            </section>
        )
    }
}

export default HomePage;