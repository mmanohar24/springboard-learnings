import { Link } from "react-router";

function NotFound() {
    return (
        <div>
            <h2> Page Not Found!!</h2>

            <p> Go to <Link to="/"> Homepage </Link> </p>
        </div>
    )
}

export default NotFound;