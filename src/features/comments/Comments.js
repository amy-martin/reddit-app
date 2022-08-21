import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingComments, retrieveComments, selectComments } from "./commentsSlice";
import { Comment } from "./Comment";

export function Comments(props) {
    //Dispatch action to retrieve comments from api and update state from useEffect hook most likely
    const {comments} = props
    // console.log(comments)
    return (
        <section className='comments-container'>
            {Object.values(comments)?.map((comment, i) => <Comment commentData={comment.data} key={i}/>)}
        </section>
    )
}