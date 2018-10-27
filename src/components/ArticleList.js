import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleComponent from './ArticleComponent'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render(){
        const {articles, toggleOpenItem, openItemId} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <ArticleComponent
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>);

        return(
            <ul>{articleElements}</ul>
        )
    }
}

export default accordion(ArticleList);