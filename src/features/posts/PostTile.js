import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PostTile(props) {
    const {post} = props;
    const id = post.id
   return (
    <Link className='post' to={post.permalink}>
        <h6 className="subreddit-info">{post.subreddit_name_prefixed}</h6>
        <h6 className="post-info">Posted by {post.author} </h6>
        <div className='post-content'>
        <h1>{post.title}</h1>
        {post.thumbnail ? <img className='thumbnail' src={post.thumbnail}/>: null}
        </div>
    </Link>
   )
}


// Was in post-content div
// {post.type === 'media' && <embed src= {post.content.link}/> }
// {post.type === 'link' && <div className='link-post'><a href= {post.content.link}/><img src={post.linkPic}/></div>}
// {post.type === 'text' && post.content}