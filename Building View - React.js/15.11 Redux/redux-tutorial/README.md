# Redux Tutorial

A React app built to practice Redux Toolkit and global state management. It covers the full Redux workflow from setting up a store to reading and updating state across multiple features.

## What it does

The app has three sections connected through React Router. The home page shows a counter with increment, decrement, and reset buttons. The users page displays a list of users and includes a form to add new ones. The posts page is the main feature, it shows a list of posts and a form to create new ones with a title, content, and an author selected from a dropdown.

Each post displays the author name, a relative timestamp showing how long ago it was posted, and a set of reaction buttons where you can add emoji reactions that update in real time.

## What I practiced

The main focus was Redux Toolkit. Each feature has its own slice file that defines the initial state, reducers, and action creators together using createSlice. The posts slice uses a prepare callback to generate a unique ID and timestamp automatically before the reducer runs, so the component does not have to handle that. The store brings all the slices together using configureStore.

On the component side, useSelector reads data out of the store and useDispatch sends actions into it. The posts list is sorted by date so the newest post always appears at the top. The PostAuthor component looks up the author name from the users slice by ID, which shows how different slices can share data through the store.

## Tech used

React, Redux Toolkit, React Redux, React Router v6, date-fns for relative timestamps, and Vite.
