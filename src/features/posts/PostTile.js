import React from "react";

export default function PostTile(props) {
    const {post} = props 
  /*
  const post = {
        type: ''
        title: ''
        content: ''
        comments: {}
    }
    */
   console.log(post.content)
   return (
    <a className='post' href=''>
        <h1>{post.title}</h1>
        <div className='post-content'>
            {post.type === 'media' && <embed src= {post.content.link}/> }
            {post.type === 'link' && <div className='link-post'><a href= {post.content.link}/><img src={post.linkPic}/></div>}
            {post.type === 'text' && post.content}
        </div>
    </a>
   )
}