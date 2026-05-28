import { useDispatch } from "react-redux"
import { reactionAdded } from "./postSlice";

import "../posts/ReactionButtons.css"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕️'
}


const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="ReactionButtons-btn"
                onClick={
                    () => dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div className="ReactionButtons">
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons
