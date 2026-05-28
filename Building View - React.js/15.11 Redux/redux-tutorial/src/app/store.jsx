import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice"
import userReducer from "../slices/userSlice";
import postReducer from "../features/posts/postSlice"
import usersReducer from "../features/users/userSlice"

const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            userInfo: userReducer,
            posts: postReducer,
            users: usersReducer
        }
    }
)

export default store;