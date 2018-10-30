import React, {Component} from 'react'
import CommentsList from '../CommentsList'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
import './article.css'
import {connect} from 'react-redux';
import {removeArticle} from "../../AC";

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.isOpen !== this.props.isOpen;
    }

    render(){
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppear
                    transitionAppearTimeout = {300}
                    component = 'div'
                >
                    {this.getHtml()}
                </CSSTransitionGroup>
                <button onClick={toggleOpen}>
                    {(isOpen) ? 'Close article' : 'Open article'}
                </button>
                <button onClick={this.handleRemoveArticle}>
                    Remove
                </button>
            </div>
        )
    }

    getHtml() {
        const {article, isOpen} = this.props;
        if (isOpen) {
            return (
                <div>
                    {article.text}
                    <CommentsList comments={article.comments}/>
                </div>
            )
        } else {
            return null;
        }
    }

    handleRemoveArticle = () => {
        const {removeArticle, article} = this.props;
        removeArticle(article.id);
    }
}

export default connect(null, {removeArticle: removeArticle})(Article);