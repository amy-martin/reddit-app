import React from "react";
import PostTile from './PostTile'
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

export default function PostListings () {
    const postListings = useSelector(selectPosts)
    return (
        <section className="post-container">
            {Object.values(postListings).map(post => <PostTile post={post} key={post.id}/>)}
        </section>
    )
}