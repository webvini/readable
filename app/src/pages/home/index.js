import React from 'react';
import { connect } from 'react-redux';

import Constants from './../../utils/constants';
import Article from './../../components/article';
import Notice from './../../components/notice';
import { fetchArticles } from '../../actions';

class HomePage extends React.Component {

    componentDidMount() {
        const { fetchArticles } = this.props
        fetchArticles();
    }

    render() {
        const { articles } = this.props;

        return (
            <section className="home-page-wrapper">
                <div className="inner">

                    { articles.data ? 
                        <Article articles={articles.data} />
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
)(HomePage);