import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingPost, selectPost, failedToLoadPost } from "./postSlice";
import { Comments } from "../comments/Comments";
import { useLocation } from "react-router-dom";
import { retrievePost } from "./postSlice";
import { failedToLoadComments, isLoadingComments, retrieveComments, selectComments } from "../comments/commentsSlice";

export default function Post() {
    const permalink = useLocation().pathname
    const post = useSelector(selectPost);
    const postIsLoading = useSelector(isLoadingPost);
    const comments = useSelector(selectComments);
    const commentsAreLoading = useSelector(isLoadingComments);
    const postFailedToLoad = useSelector(failedToLoadPost);
    const commentsFailedToLoad = useSelector(failedToLoadComments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrievePost(permalink))
        dispatch(retrieveComments(permalink))
    }, [dispatch, permalink])

    if (postIsLoading || commentsAreLoading) {
        return <div className="loading-state"><h1>Loading...</h1></div>
    }

    if (!postIsLoading && !postFailedToLoad && !commentsAreLoading && !commentsFailedToLoad && Object.keys(comments).length !== 0){
        return (
            <section className='clicked-post-container'>
                <div className='post'>
                    <div className= 'post-info'>
                        <h6 className='subreddit-info'>{post.subreddit_name_prefixed}</h6>
                        <p className='author-info'>Posted by {post.author}</p>
                    </div>
                    <div className='post-content'>
                    <h1 className="post-title post-item">{post.title}</h1>
                    
                    </div>
                    <p className='comment-button' to={post.permalink}>{post.num_comments} Comments</p>
                    <Comments comments={comments}/>
                    </div>
            </section>
            
            )}
}