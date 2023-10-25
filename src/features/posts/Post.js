import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingPost, selectPost, failedToLoadPost } from "./postSlice";
import { Comments } from "../comments/Comments";
import PostTile  from "../posts/PostTile"
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
        return <div className='loading-container'><img src={'https://i.gifer.com/ZKZg.gif'} alt='Loading gif'/></div>
    }

    if (!postIsLoading && !postFailedToLoad && !commentsAreLoading && !commentsFailedToLoad && Object.keys(comments).length !== 0){
        return (
            <section className='clicked-post-container'>
                    {console.log(post)}
                    <PostTile post={post} key={post.id}/>
                    <Comments comments={comments}/>
                    {/* </div> */}
            </section>
            
            )}
}