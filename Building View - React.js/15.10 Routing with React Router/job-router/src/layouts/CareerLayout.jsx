import { Outlet } from "react-router";
import "../CSS/CareerLayout.css"

function CareerLayout() {
    return (
        <div className="CareerLayout">

            <h1> Job Listings </h1>

            <Outlet />

        </div>
    )
}

export default CareerLayout;