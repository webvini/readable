import React from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from './../actions';
import Link from 'react-router-dom/Link';

class Menu extends React.PureComponent {
    
    componentDidMount() {
        const { fetchCategories } = this.props
        fetchCategories();
    }

    setCategory = category => {
        const { history } = this.props
        history.push(category)
    }

    render() {
        const { categories } = this.props
        const { data } =  categories

        return (
            <nav className="nav-wrapper">
                <ul className="inner">
                    {data &&
                        data.map(category =>
                            <li key={category.path}>
                                <Link to={`/${category.path}`}>{category.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({ categories }) => {
    return {
        categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);