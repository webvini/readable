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

    render() {
        const { articles } = this.props
        const { data } = articles

        return (
            <React.Fragment>
                <Header />
                <Menu />

                <section className="home-page-wrapper">
                    <div className="inner">

                        { data ? 
                            <Article articles={data} />
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