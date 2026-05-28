import { NavLink, Outlet } from "react-router"
import "../Components/BreadCrumbs"

import "../CSS/RouteLayout.css"
import BreadCrumbs from "../Components/BreadCrumbs"

const RouteLayout = () => {
    return (
        <div className="RouteLayout">
            <header>
                <nav className="RouteLayout-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}> Home </NavLink>
                    <NavLink to="/celestial/mars" > Mars </NavLink>
                    <NavLink to="/celestial/venus"> Venus </NavLink>
                    <NavLink to="/celestial/orion-nebula"> Orion_Nebula </NavLink>
                    <NavLink to="/celestial/andromeda-galaxy"> Andromeda_Galaxy </NavLink>
                </nav>

                <BreadCrumbs />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RouteLayout
