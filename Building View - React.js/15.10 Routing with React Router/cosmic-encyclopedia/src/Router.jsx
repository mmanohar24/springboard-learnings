import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router";

// Pages
import Home from "./Pages/Home";
import Mars from "./Pages/Mars";
import Venus from "./Pages/Venus";
import OrionNebula from "./Pages/Orion_Nebula";
import AndromedaGalaxy from "./Pages/Andromeda_Galaxy";

// Layouts
import RouteLayout from "./Layouts/RouteLayout";



const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="mars" element={<Mars />} />
            <Route path="venus" element={<Venus />} />
            <Route path="orion-nebula" element={<OrionNebula />} />
            <Route path="andromeda-galaxy" element={<AndromedaGalaxy />} />
        </Route>
    )
);

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;