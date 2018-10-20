import React from 'react';

export default function Comment(props) {
    const {comment} = props;
    return (
        <section>
            <h4>{comment.user}</h4>
            <p>{comment.text}</p>
        </section>
    )
}
