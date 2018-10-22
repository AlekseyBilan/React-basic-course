import React, {Component} from 'react';
import Comment from "./Comment";

export default class CommentsList extends Component{
    static defaultProps = {
        comments: []
    };
    render (){
        const {comments} = this.props;
            if(comments.length){
                const commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>);
                return  <ul>{commentElements}</ul>
            } else {
                return  <p>There are no comments here.</p>
            }
    }
}