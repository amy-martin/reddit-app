import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PostTile(props) {
    const {post} = props;
    const id = post.id
   return (
    <Link className='post' to={`/posts/${id}`}>
        <h1>{post.title}</h1>
        <div className='post-content'>
            {post.type === 'media' && <embed src= {post.content.link}/> }
            {post.type === 'link' && <div className='link-post'><a href= {post.content.link}/><img src={post.linkPic}/></div>}
            {post.type === 'text' && post.content}
        </div>
    </Link>
   )
}