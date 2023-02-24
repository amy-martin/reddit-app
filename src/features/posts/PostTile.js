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
                <div className="media">
                    <video className="media-item" controls>
                        {/* <source src={post.media.reddit_video.dash_url} type = 'mpd' /> */}
                        <source src={post.media.reddit_video.fallback_url} type = 'video/mp4'/>
                    </video>
                    <p>{post.selftext}</p>
                </div>
                
                </div>
        )
    } else if (post.post_hint == 'image') {
        postPreviewContent = (
            <div className='post-content'>
                <h1 className="post-title post-item">{post.title}</h1>
                <div className="media">
                    <img className="media-item" src={post.url} alt='Image not loaded'/>
                    <p>{post.selftext}</p>
                </div>
                
            </div>
        )
       
    } else if (post.post_hint == 'link') {
        postPreviewContent = (
            <div className="link-post-container">
                <div className='post-content with-thumbnail link-post'>
                    <h1 className="post-title post-item">{post.title}</h1>
                    <div className="thumbnail">
                        <a href ={post.url}> {
                            (post.thumbnail !== 'self' && post.thumbnail !== 'nsfw' && post.thumbnail !== 'default' ) ? <img  src={post.thumbnail} style={{height: `${post.thumbnail_height}`, width: `${post.thumbnail_width}` }}/>: 
                            // <div style={{color: 'white', width: '100px', height: '80px', border: 'solid .5px blue', borderRadius: '5px'}}></div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Echo_link-blue_icon_slanted.svg/1024px-Echo_link-blue_icon_slanted.svg.png" style={{height: '50px', width: '50px', border: 'none'}}/>
                            }
                        </a>
                    </div>
                    <p>{post.selftext}</p>
                </div>
                <a className="hyperlink" href={post.url}>https://{post.domain}/...</a>
            </div>

    ) 
    } else {
        postPreviewContent = (
            <div class-name="post-content">
                <h1 className="post-title post-item">{post.title}</h1>
                <p>{post.selftext}</p>
            </div>

        )
    }
    
   
    return (
        <div className="post">
            <div className= 'post-info'>
                <h6 className='subreddit-info'>{post.subreddit_name_prefixed}</h6>
                <p className='author-info'>Posted by {post.author}</p>
            </div>
            {postPreviewContent}
            <p className='comment-button' to={post.permalink}>{post.num_comments} Comments</p>
        </div>       
        )
}