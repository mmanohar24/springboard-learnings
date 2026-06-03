import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postSlice";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

import "../posts/PostForm.css"

const PostForm = () => {

    const INITIAL_STATE = {
        title: '',
        content: '',
        userId: '',
        addRequestStatus: 'idle'
    }

    const [formInput, setFormInput] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormInput(
            (currentItem) => {
                return {
                    ...currentItem,
                    [name]: value
                }
            }
        )
    }

    const canSave = [formInput.title, formInput.content, formInput.userId].every(Boolean) && formInput.addRequestStatus === 'idle';

    const addPosts = (event) => {

        event.preventDefault();
        if (canSave) {
            try {
                setFormInput({ ...formInput, addRequestStatus: 'pending' });
                dispatch(addNewPost({
                    title: formInput.title,
                    content: formInput.content,
                    userId: formInput.userId
                }))
            }
            catch (error) {
                console.log('Failed to save the post', error)
            }
            finally {
                setFormInput(INITIAL_STATE)
            }
        }
        // if (formInput.title && formInput.content) {
        //     event.preventDefault();
        //     dispatch(addPost({ ...formInput }))
        //     setFormInput(INITIAL_STATE);
        // }
    }

    const authors = users.map(user =>
    (
        <option key={user.id} value={user.id}>
            {
                user.name
            }
        </option>
    )
    )

    return (
        <div className="PostForm">

            <form>
                <label htmlFor="title"> Enter Post Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formInput.title}
                    onChange={handleChange}
                />

                <label htmlFor="content"> Enter Post Content </label>
                <input
                    type="text"
                    id="content"
                    name="content"
                    value={formInput.content}
                    onChange={handleChange}
                />

                <label htmlFor="author"> Author: </label>
                <select
                    id="author"
                    name="userId"
                    value={formInput.userId}
                    onChange={handleChange}
                    className="PostForm-select"
                >
                    <option value=""> Select Author </option>
                    {
                        authors
                    }
                </select>

                <button
                    type="button"
                    className="PostForm-addpostBtn"
                    onClick={addPosts}
                    disabled={!canSave}
                >
                    Add Post
                </button>
            </form>

        </div>
    )
}

export default PostForm;
