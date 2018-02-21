import React from 'react';
import { connect } from 'react-redux';

import Header from './../../header';
import Menu from './../../menu';

import Constants from './../../utils/constants';
import Article from './../../components/article';
import Notice from './../../components/notice';
import { fetchArticles } from '../../actions';

class Home extends React.Component {

    componentDidMount() {
        const { fetchArticles } = this.props
        fetchArticles();
    }

    renderArticle = data => {
        const { history } = this.props
        const { pathname } = history.location
        const category = pathname

        return (
            data
                .filter(article => article.category === category.slice(1) || category === '/')
                .map((article, index) => (
                    <Article
                        key={index}
                        article={article}
                        history={history}
                    />
                ))
        )
    }

    render() {
        const { articles, history } = this.props
        const { data } = articles

        return (
            <React.Fragment>
                <Header />
                <Menu history={history} />

                <section className="home-page-wrapper">
                    <div className="inner">

                        { data ? 
                            this.renderArticle(data)
                        :
                            <Notice
                                type={Constants.notice.type.warning}
                                message={Constants.messages.noArticle}
                            />
                        }

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ articles }) => {
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
)(Home);