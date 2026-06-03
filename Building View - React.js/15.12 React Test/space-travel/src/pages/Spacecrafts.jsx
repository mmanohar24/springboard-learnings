import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelAPI";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

import "../css/Spacecrafts.css"


function SpaceCrafts() {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleDestroy = async (id) => {
        const response = await SpaceTravelApi.destroySpacecraftById({ id });

        if (!response.isError) {
            setResults(results.filter(spacecraft => spacecraft.id !== id));
        }
    }

    useEffect(
        () => {
            const fetchSpaceCrafts = async () => {
                const response = await SpaceTravelApi.getSpacecrafts();

                if (response.isError) {
                    setIsError(true)
                }
                else {
                    setResults(response.data);
                }

                setIsLoading(false);
            }
            fetchSpaceCrafts();
        }, []
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="Spacecrafts">
            <h2> The Fleet </h2>

            <Link to="/spacecrafts/construction" className="Spacecrafts-buildLink"> Build New Spacecraft </Link>

            <div>
                {
                    results.map(spacecraft =>
                    (
                        <div key={spacecraft.id} className="Spacecrafts-card">

                            <h3> {spacecraft.name} </h3>

                            <p> Capacity: {spacecraft.capacity} </p>

                            <p className="Spacecraft-cardDescription"> Description: {spacecraft.description} </p>

                            <img src={spacecraft.pictureUrl} />

                            <div className="Spacecrafts-cardActions">

                                <Link to={`/spacecrafts/${spacecraft.id}`} className="Spacecrafts-cardActionsLink"> View Details </Link>

                                <button
                                    onClick={() => handleDestroy(spacecraft.id)}
                                > Destroy </button>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

            {
                isError && (<p> Something went wrong!!</p>)
            }
        </div>
    )
}

export default SpaceCrafts;