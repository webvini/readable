import React from 'react';
import { connect } from 'react-redux';

import Constants from './../../utils/constants';
import Article from './../../components/article';
import Notice from './../../components/notice';
import { fetchArticles } from '../../actions/index';

class HomePage extends React.Component {

    state = {
        articles: [
        ]
    }

    componentDidMount() {
        fetchArticles();
    }

    render() {
        const { articles } = this.state;

        if(this.props.articles) {
            console.log(this.props.articles)
        }

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

const mapStateToProps = articles => {
    return {
        articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);