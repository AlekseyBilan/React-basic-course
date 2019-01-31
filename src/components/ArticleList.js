import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article.jsx'

export default class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    state = {
        openArticleId: null
    };

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle(openArticleId){
        this.setState({openArticleId})
    }
}
