import { Link, useRouteError } from "react-router"

function CareerError() {

    const error = useRouteError();

    return (
        <div className="CareerError">

            <h2> Error </h2>

            <p> {error.message} </p>

            <Link to="/"> Back to Homepage. </Link>

        </div>
    )
}

export default CareerError;