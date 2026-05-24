import { useLocation, Link } from "react-router";
import "../CSS/Breadcrumbs.css"

function Breadcrumbs() {

    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}> {crumb} </Link>
                </div>
            )
        })
    return (
        <div className="Breadcrumbs">
            {
                crumbs
            }
        </div>
    )
}

export default Breadcrumbs;