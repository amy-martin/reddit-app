import { useEffect } from "react";
import PostTile from './PostTile'
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { isLoadingPosts } from "./postsSlice";
import { retrievePosts } from "./postsSlice";


export default function PostListings (props) {
    const dispatch = useDispatch();
    const {filterSelection, searchQuery} = props;
    const postsAreLoading = useSelector(isLoadingPosts)
    const postListings = useSelector(selectPosts)

    useEffect(() => {
        if (!filterSelection && !searchQuery) {
            dispatch(retrievePosts('/r/popular'))
        }
        if (filterSelection) {
            dispatch(retrievePosts(filterSelection))
        }
        if (searchQuery) {
            dispatch(retrievePosts(`/search/${searchQuery}`))
        }
    }, [dispatch, filterSelection])

    if (postsAreLoading) {
        return <div className="loading-state"><h1>Loading...</h1></div>
    }
    
    return (
        <section className="post-container">
            {postListings.data?.children.map(post => <PostTile post={post.data} key={post.data.id}/>)}
        </section>
    )
}  