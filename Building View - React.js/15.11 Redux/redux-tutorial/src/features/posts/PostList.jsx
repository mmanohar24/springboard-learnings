import { useSelector, useDispatch } from "react-redux";
import { selectsAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import { useEffect } from "react";

import PostsExcerpt from "./PostsExcerpt";
import PostForm from "../posts/PostForm"
import "../posts/PostList.css"


const PostList = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectsAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(
        () => {
            if (postsStatus === 'idle') {
                dispatch(fetchPosts())
            }
        }, [postsStatus, dispatch]
    )

    let content;
    if (postsStatus === 'loading') {
        content = <p> "Loading..." </p>
    }
    else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(
            post => <PostsExcerpt key={post.id} post={post} />
        )
    }
    else if (postsStatus === 'failed') {
        content = <p> {postsError} </p>
    }

    return (
        <div className="PostList">
            <section>

                <div className="PostList-form">
                    <h2> Add a New Post </h2>

                    <PostForm />
                </div>

                <h2> Posts </h2>

                <div className="PostList-posts">
                    {
                        content
                    }
                </div>

            </section>
        </div>
    )
}

export default PostList
