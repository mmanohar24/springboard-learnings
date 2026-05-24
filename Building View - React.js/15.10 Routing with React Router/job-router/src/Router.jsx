import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router";
import "./Router.css"

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact, { contactAction } from "./pages/Contact";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetail, { careerDetailLoader } from "./pages/CareerDetail";
import CareerError from "./pages/CarrerError";
import NotFound from "./pages/NotFound";



// Layouts
import RouteLayout from "./layouts/route-layout";
import HelpLayout from "./layouts/help-layout";
import CareerLayout from "./layouts/CareerLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<FAQ />} />
                <Route path="contact" element={<Contact />} action={contactAction} />
            </Route>

            <Route
                path="careers"
                element={<CareerLayout />}
                errorElement={<CareerError />}
            >
                <Route
                    index
                    element={<Careers />}
                    loader={careersLoader}

                />

                <Route
                    path=":id"
                    element={<CareerDetail />}
                    loader={careerDetailLoader}
                />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Route>
    )
)

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;