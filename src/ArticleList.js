import React from 'react'
import ArticleComponent from './ArticleComponent'

export default function ArticleList (props){
    const {articles} = props;
    const articleElements = articles.map(article => <li key={article.id}><ArticleComponent article = {article}/></li>);

    return(
         <ul>{articleElements}</ul>
    )
}