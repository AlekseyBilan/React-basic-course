import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

class Article extends Component {
    static propTypes = {
        article : PropTypes.shape({
                id : PropTypes.string.isRequired,
                title : PropTypes.string.isRequired,
                text : PropTypes.string,
                comments : PropTypes.array
        }).isRequired
    };

    render(){
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                {this.getArticleText()}
                <button onClick={toggleOpen}>
                    {(isOpen)? 'Close article' : 'Open article'}
                </button>
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref
        //console.log('Ref', ref);
    };

    getArticleText() {
        const {article, isOpen, toggleOpen} = this.props;
        if(isOpen){
            return <div>
                        {article.text}
                        <CommentsList comments = {article.comments} />
                   </div>
        }else{
            return null;
        }
    }

}

export default Article;
