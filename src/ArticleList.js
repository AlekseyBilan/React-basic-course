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
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

export default ArticleList