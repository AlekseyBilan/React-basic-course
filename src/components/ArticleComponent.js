import React from 'react'
import CommentsList from './CommentsList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

function ArticleComponent(props) {
    const {article, isOpen, toggleOpen} = props;
    return(
        <div>
            <h3>{article.title}</h3>
            {getHtml(article, isOpen)}
            <button onClick={toggleOpen}>
                {(isOpen)? 'Close article' : 'Open article'}
            </button>
        </div>
    )
}

function  getHtml(article, isOpen){
    if(isOpen){
        return (
            <div>
                {article.text}
                <CommentsList comments = {article.comments}/>
            </div>
        )
    }else{
        return null;
    }
}

ArticleComponent.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default toggleOpen(ArticleComponent)