import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render(){
        return (
            <section>
                {this.getCommentLayout()}
                <button onClick={this.toggleOpen}>
                    {(this.state.isOpen)? 'Close Comment' : 'Open Comment'}
                </button>
            </section>
        )
    }
    getCommentLayout (){
        const {comment} = this.props;
        if (this.state.isOpen){
            return (<section><h4>{comment.user}</h4><p>{comment.text}</p></section>)
        } else {
            return null;
        }
    }
    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
