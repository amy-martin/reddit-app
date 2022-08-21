import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PostTile(props) {
    const {post} = props;
    const id = post.id
    let postPreviewContent

    if (post.is_video) {
        postPreviewContent = (
            <div className='post-content'>
                <h1 className="post-title post-item">{post.title}</h1>
                <video className="media" controls>
                    {/* <source src={post.media.reddit_video.dash_url} type = 'mpd' /> */}
                    <source src={post.media.reddit_video.fallback_url} type = 'video/mp4'/>
                </video>
                </div>
        )
    } else if (post.post_hint == 'image') {
        postPreviewContent = (
            <div className='post-content'>
                <h1 className="post-title post-item">{post.title}</h1>
                <img src={post.url} alt='Image not loaded'/>
            </div>
        )
       
    } else {
    postPreviewContent = (
        <div className='post-content with-thumbnail'>
                <h1 className="post-title post-item">{post.title}</h1>
                {(post.thumbnail !== 'self' && post.thumbnail !== 'nsfw' && post.thumbnail !== 'default' ) ? <img className='post-item thumbnail' src={post.thumbnail} style={{height: `${post.thumbnail_height}`, width: `${post.thumbnail_width}` }}/>: null}
        </div>
    ) }
    

    return (
        <Link className='post'to={post.permalink}>
            <div className= 'post-info'>
                <h6 className='subreddit-info'>{post.subreddit_name_prefixed}</h6>
                <p className='author-info'>Posted by {post.author}</p>
            </div>
            {postPreviewContent}
            <p className='comment-button' to={post.permalink}>{post.num_comments} Comments</p>
        </Link>
    )
}