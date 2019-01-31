import React from 'react';
import toggleOpen from '../decorators/toggleOpen'

function Comment({comment, isOpen, toggleOpen}){
    return (
        <div className='comments-wrapper'>
            <ul>
                {(isOpen) ? (<li key={comment.id}><b>{comment.user}</b><p>{comment.text}</p></li>) : null}
            </ul>
            <button onClick={toggleOpen}>{(isOpen)? 'Close comments' : 'Open comments'}</button>
        </div>
    )
}

export default toggleOpen(Comment);