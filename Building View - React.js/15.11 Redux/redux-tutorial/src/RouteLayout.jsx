import { NavLink, Outlet } from "react-router"
import "./RouteLayout.css"

const routeLayout = () => {
    return (
        <div className="routeLayout">

            <header>
                <nav>
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='users'> Users </NavLink>
                    <NavLink to="posts"> Posts </NavLink>
                </nav>

            </header>

            <main className="routelayout-main">
                <Outlet />
            </main>

        </div>
    )
}

export default routeLayout