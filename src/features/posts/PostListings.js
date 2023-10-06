import { useEffect } from "react";
import PostTile from './PostTile'
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { isLoadingPosts } from "./postsSlice";
import { retrievePosts, retrieveFilteredPosts, retrieveSearchPosts } from "./postsSlice";
import { Link } from "react-router-dom";


export default function PostListings (props) {
    const dispatch = useDispatch(); 
    const {filterSelection, searchQuery} = props;
    const postsAreLoading = useSelector(isLoadingPosts)
    const postListings = useSelector(selectPosts)
    useEffect(() => {
        if (!filterSelection && !searchQuery) {
            dispatch(retrievePosts())
        }
        if (filterSelection) {
            dispatch(retrieveFilteredPosts({filterSelection}))
        }
        if (searchQuery) {
            dispatch(retrieveSearchPosts(searchQuery))
        }
    }, [dispatch, filterSelection, searchQuery])
    if (postsAreLoading) {
        return <div className='loading-container'><img src={'https://i.gifer.com/ZKZg.gif'} alt='Loading gif'/></div>
    }
    return (
        <section className="post-container">
            {postListings.data?.children.map(post => 
            <Link className = "post-link" to={post.data.permalink} key={post.data.id}> 
                <PostTile post={post.data}/>
            </Link>)}
        </section>
    )
}  