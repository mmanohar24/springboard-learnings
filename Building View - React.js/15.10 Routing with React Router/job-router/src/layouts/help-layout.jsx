import "./help-layout.css"

import { NavLink, Outlet } from "react-router"

const HelpLayout = () => {
    return (
        <div className="HelpLayout">

            <h3> Website Helper </h3>

            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam dignissimos porro accusantium!
                Doloribus repudiandae praesentium tenetur consequuntur nisi quia consectetur, nesciunt est?
                Consequatur illum a laudantium id officia ad pariatur.
            </p>

            <nav className="HelpLayout-nav">
                <NavLink to="faq"> View FAQ </NavLink>
                <NavLink to="contact"> Contact Us </NavLink>
            </nav>

            <Outlet />

        </div>
    )
}

export default HelpLayout