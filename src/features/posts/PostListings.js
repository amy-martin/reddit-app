import { useEffect } from "react";
import PostTile from './PostTile'
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { isLoadingPosts } from "./postsSlice";
import { retrievePosts, retrieveFilteredPosts, retrieveSearchPosts } from "./postsSlice";


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
        return <div className="loading-state"><h1>Loading...</h1></div>
    }
    console.log(postListings)
    return (
        <section className="post-container">
            {postListings.data?.children.map(post => <PostTile post={post.data} key={post.data.id}/>)}
        </section>
    )
}  