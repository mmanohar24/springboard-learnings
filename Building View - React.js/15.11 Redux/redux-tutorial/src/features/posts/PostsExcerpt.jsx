import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostsExcerpt = ({ post }) => {
    return (
        <div>
            <article >
                <h3> {post.title} </h3>
                <p> {post.body} </p>

                <p className="PostList-postAuthorName">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </article>
        </div>
    )
}

export default PostsExcerpt
