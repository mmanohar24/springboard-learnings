import { useSelector } from "react-redux";
import { selectsAllPosts } from "./postSlice";

import PostForm from "../posts/PostForm"
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import "../posts/PostList.css"


const PostList = () => {

    const posts = useSelector(selectsAllPosts);

    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPost.map(
        post => (
            <article key={post.id}>
                <h3> {post.title} </h3>
                <p> {post.content} </p>

                <p className="PostList-postAuthorName">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </article>
        )
    )

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
                        renderedPosts
                    }
                </div>

            </section>
        </div>
    )
}

export default PostList
