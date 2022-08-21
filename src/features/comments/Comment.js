import React from "react";

export function Comment(props) {
    const {commentData} = props
    console.log(commentData)
    return (
        <div className='comment'>
            <div className= 'comment-info'>
                <p className='author-info'>{commentData.author}</p>
            </div>
            <h3>{commentData.body}</h3>
        </div>
    )
}