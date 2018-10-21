import React from 'react';
import Comment from "./Comment";

export default function CommentList (props){
    const {comments} = props;
    if(comments){
        const commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>);
        return  <ul>{commentElements}</ul>
    } else {
        return  <p>There are no comments here.</p>
    }
}