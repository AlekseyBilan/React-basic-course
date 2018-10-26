import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleComponent from './ArticleComponent'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
    state = {
        openArticleId : null
    };

    render(){
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <ArticleComponent
                    article = {article}
                    isOpen = {article.id === this.state.openArticleId}
                    toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>);

        return(
            <ul>{articleElements}</ul>
        )
    }

    toggleOpenArticle(openArticleId){
        this.setState({ openArticleId })
    }
}

export default ArticleList