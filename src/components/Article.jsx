import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen'

function Article({article, isOpen, toggleOpen}){
    const getArticleText = function () {
        if(isOpen){
            return <div>
                {article.text}
                <CommentsList comments = {article.comments} />
            </div>
        }else{
            return null;
        }
    };
    return (
        <div>
            <h3>{article.title}</h3>
            {getArticleText()}
            <button onClick={toggleOpen}>
                {(isOpen)? 'Close article' : 'Open article'}
            </button>
        </div>
    )
}

Article.propTypes = {
    article : PropTypes.shape({
        id : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        text : PropTypes.string,
        comments : PropTypes.array
    }).isRequired,
    isOpen : PropTypes.bool,
    toggleOpen : PropTypes.func
};

export default toggleOpen(Article);
