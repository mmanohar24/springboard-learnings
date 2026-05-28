import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router";
import UserForm from "./UserForm";
import Users from "./Pages/Users";
import RouteLayout from "./RouteLayout";
import PostList from "./features/posts/PostList";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<UserForm />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<PostList />} />
        </Route>
    )
)

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;