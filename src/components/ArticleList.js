import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article.jsx'
//import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
/*        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func*/
    };

    render() {
        const articleElements = this.props.articles.map(article =>
            <li key={article.id}>
                <Article
                    article = {article}
                />
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}
export default ArticleList