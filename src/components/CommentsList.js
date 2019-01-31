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
                return  <div><ul>{commentElements}</ul></div>
            } else {
                return  <div><p>There are no comments here.</p><p>You can create a new one </p></div>
            }
    }
}