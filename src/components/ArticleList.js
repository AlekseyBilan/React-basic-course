import React from 'react'
import PropTypes from 'prop-types'
import ArticleComponent from './ArticleComponent'

function ArticleList (props){
    const {articles} = props;
    const articleElements = articles.map(article => <li key={article.id}><ArticleComponent article = {article}/></li>);

    return(
         <ul>{articleElements}</ul>
    )
}
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList