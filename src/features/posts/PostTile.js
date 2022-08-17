import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PostTile(props) {
    const {post} = props;
    const id = post.id
   return (
    <Link className='post'to={post.permalink}>
        <div className= 'post-info'>
            <h6 className='subreddit-info'>{post.subreddit_name_prefixed}</h6>
            <p className='author-info'>Posted by {post.author} </p>
        </div>
        <div className='post-content'>
        <h1>{post.title}</h1>
        {(post.thumbnail !== 'self' && post.thumbnail !== 'nsfw')? <img className='thumbnail' src={post.thumbnail}/>: null}
        </div>
        <Link className='comment-button' to={post.permalink}>{post.num_comments} Comments</Link>
    </Link>
   )
}