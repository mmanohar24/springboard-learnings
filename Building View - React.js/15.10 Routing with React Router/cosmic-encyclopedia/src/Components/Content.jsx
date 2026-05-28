import { useParams } from "react-router";
import celestialObjects from "../Data/data";
import "../CSS/Content.css"

function Content() {

    const { id } = useParams();
    const object = celestialObjects.find(item => item.id === id);

    if (!object) {
        return <p> Not Found </p>
    }

    return (
        <div className="Content">
            <h2> {object.title} </h2>

            <p> {object.description} </p>

            <div className="Content-img">
                <img src={object.image} />
            </div>

        </div>
    )
}

export default Content;