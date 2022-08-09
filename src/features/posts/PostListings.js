import React from "react";
import PostTile from './PostTile'


// const postListings = [
//     {postId: 490285,
//     type: '',
//     content: '',
//     ...
// }]

export default function PostListings () {
    const postListings = [
        {id: 490285,
        type: 'text',
        title: 'I love Hector',
        content: 'I love Hector a lot'},
        {id: 490295,
        type: 'media',
        title: 'Brad and Pineapple',
        content: {link: 'https://youtu.be/JNcoYLVFCKg'}}
    ]
    return (
        <section className="post-listings">
            {postListings.map(post => <PostTile post={post} key={post.id}/>)}
        </section>
    )
}