import { NavLink, Outlet } from "react-router-dom";
import "../Layouts/RouteLayout.css";

function RouteLayout() {

    return (
        <div className="RouteLayout">

            <header>
                <nav className="RouteLayout-links">
                    <NavLink to="/" className="RouteLayout-navlink"> Home </NavLink>
                    <NavLink to="/spacecrafts" className="RouteLayout-navlink"> View Fleet </NavLink>
                    <NavLink to="/planets" className="RouteLayout-navlink"> View Planets </NavLink>
                </nav>

            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default RouteLayout;