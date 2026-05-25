import { useNavigate } from "react-router";
import "../CSS/BreadCrumbs.css"

function BreadCrumbs() {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);


    return (
        <div className="Breadcrumbs">
            <button
                className="Breadcrumb-backBtn"
                onClick={handleBack} >

                    ← Go Back
            </button>
        </div>
    );
}

export default BreadCrumbs;