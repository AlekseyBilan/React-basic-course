import React, {Component} from 'react'
import CommentsList from './CommentsList'
import PropTypes from 'prop-types'

export default class ArticleComponent extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render(){
        const {article} = this.props;
        return(
            <div>
                <h3>{article.title}</h3>
                {this.getHtml()}
                <button onClick={this.toggleOpen}>
                    {(this.state.isOpen)? 'Close article' : 'Open article'}
                </button>
            </div>
            )
    }

    getHtml(){
        const {article} = this.props;
        if(this.state.isOpen){
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

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}