import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenComment: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render(){
        return (
            <div className='comments-wrapper'>
                <ul>{this.getCommentsHtml()}</ul>
                <button onClick={this.toggleOpen}>{(this.state.isOpenComment)? 'Close comments' : 'Open comments'}</button>
            </div>
            )
    }

    getCommentsHtml() {
        const {comment} = this.props;
        if(this.state.isOpenComment){
            return <li key={comment.id}><b>{comment.user}</b><p>{comment.text}</p></li>;
        }else{
            return null;
        }
    }

    toggleOpen(){
        this.setState({
            isOpenComment: !this.state.isOpenComment
        });
    }

}
