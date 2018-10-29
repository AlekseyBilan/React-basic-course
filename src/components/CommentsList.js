import React, {Component} from 'react';
import Comment from "./Comment";
import NewCommentForm from "./ComponentForm/NewCommentForm";

export default class CommentsList extends Component{
    static defaultProps = {
        comments: []
    };
    render (){
        const {comments} = this.props;
            const newCommentForm = <NewCommentForm/>;
            if(comments.length){
                const commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>);
                return  <div><ul>{commentElements}</ul><NewCommentForm/></div>
            } else {
                return  <div><p>There are no comments here.</p>You can create a new one <NewCommentForm/></div>
            }
    }
}