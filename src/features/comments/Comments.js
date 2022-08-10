import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import { Comment } from "./Comment";

export function Comments(props) {
    //Dispatch action to retrieve comments from api and update state from useEffect hook most likely
    const {post} = props
    const commentsList = useSelector(selectComments);
    console.log(commentsList)
    const postComments = Object.values(commentsList).filter(comment => post.title === comment.postTitle)
    return (
        <section className='comments-container'>
            {postComments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </section>
    )
}