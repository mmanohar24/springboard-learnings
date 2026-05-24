import { NavLink, Outlet } from "react-router"

import "./RouteLayout.css"
import Breadcrumbs from "../Components/Breadcrumbs"

const routeLayout = () => {
    return (
        <div className="routeLayout">

            <header>
                <nav>
                    <h3> Job Router </h3>

                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='about'> About </NavLink>
                    <NavLink to='help'> Help </NavLink>
                    <NavLink to="careers"> Careers </NavLink>

                </nav>

                <Breadcrumbs />
            </header>

            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default routeLayout
