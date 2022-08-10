import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { Comments } from "../comments/Comments";
import { useParams } from "react-router-dom";

export default function Post() {
    const posts = useSelector(selectPosts)
    const {id} = useParams()
    const post = posts[id]
    return (
        <section className='clicked-post-container'>
            <div className='post'>
                <h1>{post.title}</h1>
                <div className='post-content'>
                    {post.type === 'media' && <embed src= {post.content.link}/> }
                    {post.type === 'link' && <div className='link-post'><a href= {post.content.link}/><img src={post.linkPic}/></div>}
                    {post.type === 'text' && post.content}
                </div>
            </div>
            <Comments post={post}/>
        </section>
        
        
    )
}