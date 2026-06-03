import { createBrowserRouter, RouterProvider, Route, Navigate, createRoutesFromElements } from "react-router-dom";

import Home from "./pages/Home";
import SpaceCraft from "./pages/Spacecraft";
import SpaceCrafts from "./pages/Spacecrafts";
import Construction from "./pages/Construction";
import Planets from "./pages/Planets";
import RouteLayout from "./Layouts/RouteLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="/spacecrafts" element={<SpaceCrafts />} />
            <Route path="/spacecrafts/construction" element={<Construction />} />
            <Route path="/spacecrafts/:id" element={<SpaceCraft />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Route>
    )
)

function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}


export default Router;