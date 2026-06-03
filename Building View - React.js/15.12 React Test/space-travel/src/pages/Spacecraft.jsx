import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelAPI";
import Loading from "../components/Loading";

function SpaceCraft() {

    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { id } = useParams();

    useEffect(
        () => {
            const fetchSpaceCraftsById = async () => {
                const response = await SpaceTravelApi.getSpacecraftById({ id });

                if (response.isError) {
                    setIsError(true)
                }
                else {
                    setResults(response.data);
                }

                setIsLoading(false);
            }
            fetchSpaceCraftsById();
        }, [id]
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2> {results ? results.name : ""} </h2>

            <Link to="/spacecrafts">  ← Back to Fleet </Link>

            {isError && <p> Something went wrong. Please try again. </p>}

            {
                results && (
                    <div>
                        <h3> {results.name} </h3>
                        <p> Capacity: {results.capacity} </p>
                        <p> Description: {results.description} </p>
                        <p> Current Location: {results.currentLocation} </p>
                    </div>
                )
            }
        </div>
    )
}

export default SpaceCraft;