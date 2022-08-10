import React from "react";

export function Comment(props) {
    const {comment} = props
    return (
        <div className='comment'><h3>{comment.comment}</h3></div>
    )
}