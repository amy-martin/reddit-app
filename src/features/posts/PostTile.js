import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PostTile(props) {
    const {post} = props;
    const id = post.id
    let postPreviewContent

    if (post.is_video) {
        postPreviewContent = (
        <video className="media" style={{height:`${post.media.reddit_video.height}`, width: `${post.media.reddit_video.width}`}}>
            <source src={post.media.reddit_video.dash_url} type = 'mpd' />
            <source src={post.media.reddit_video.fallback_url} type = 'mp4'/>
            Your Browser Does Not Support This Video
        </video>
        )
    } else {
        postPreviewContent = (post.thumbnail !== 'self' && post.thumbnail !== 'nsfw' && post.thumbnail !== 'default' ) ? <img className='post-item thumbnail' src={post.thumbnail} style={{height: `${post.thumbnail_height}`, width: `${post.thumbnail_width}` }}/>: null
    }
    

    return (
        <Link className='post'to={post.permalink}>
            <div className= 'post-info'>
                <h6 className='subreddit-info'>{post.subreddit_name_prefixed}</h6>
                <p className='author-info'>Posted by {post.author}</p>
            </div>
            <div className='post-content'>
            <h1 className="post-title post-item">{post.title}</h1>
            {postPreviewContent}
            </div>
            <p className='comment-button' to={post.permalink}>{post.num_comments} Comments</p>
        </Link>
    )
}