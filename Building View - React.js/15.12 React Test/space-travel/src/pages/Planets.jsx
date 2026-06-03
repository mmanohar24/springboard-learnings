import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelAPI";
import Loading from "../components/Loading";
import "../css/Planets.css";

import mercury from "../assets/mercury.webp"
import venus from "../assets/venus.jpg"
import earth from "../assets/earth.webp"
import mars from "../assets/mars.png"
import jupiter from "../assets/jupiter.png"
import saturn from "../assets/saturn.jpg"
import uranus from "../assets/uranus.jpg"
import neptune from "../assets/neptune.png"

const planetImages = {
    Mercury: mercury,
    Venus: venus,
    Earth: earth,
    Mars: mars,
    Jupiter: jupiter,
    Saturn: saturn,
    Uranus: uranus,
    Neptune: neptune
}

function Planets() {

    const [planets, setPlanets] = useState([]);
    const [spacecrafts, setSpacecrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(
        () => {
            const fetchPlanets = async () => {
                const planetResponse = await SpaceTravelApi.getPlanets();
                const spaceCraftResponse = await SpaceTravelApi.getSpacecrafts();

                if (planetResponse.isError || spaceCraftResponse.isError) {
                    setIsError(true)
                }
                else {
                    setPlanets(planetResponse.data);
                    setSpacecrafts(spaceCraftResponse.data);
                }

                setIsLoading(false);
            }
            fetchPlanets();
        }, []
    )

    const handleSend = async (spacecraftId, targetPlanetId) => {
        const response = await SpaceTravelApi.sendSpacecraftToPlanet(
            {
                spacecraftId,
                targetPlanetId
            }
        )

        if (!response.isError) {
            const updatedSpacecrafts = spacecrafts.map(
                spacecraft => spacecraft.id === spacecraftId ? { ...spacecraft, currentLocation: targetPlanetId } : spacecraft
            )

            setSpacecrafts(updatedSpacecrafts);
        }
    }

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h2> The Solar System </h2>

            {/* <Link to="/"> Back to Home </Link> */}

            <div className="Planets">
                {
                    planets.map(
                        planet => {

                            const stationedSpacecrafts = spacecrafts.filter(
                                spacecraft => spacecraft.currentLocation === planet.id
                            )

                            const otherSpacecrafts = spacecrafts.filter(
                                spacecraft => spacecraft.currentLocation !== planet.id
                            )

                            return (

                                <div key={planet.id} className="Planets-container">

                                    <div className="Planets-imgWrapper">
                                        <img src={planetImages[planet.name]} alt={planet.name} className="Planets-img" />
                                    </div>

                                    <div className="Planets-details">
                                        <h3> Name: {planet.name} </h3>

                                        <p> Population: {planet.currentPopulation} </p>



                                        <p> Spacecraft stationed here: </p>
                                        {
                                            stationedSpacecrafts.map(
                                                spacecraft => (

                                                    <p key={spacecraft.id}>
                                                        {spacecraft.name}
                                                    </p>
                                                )
                                            )
                                        }

                                        <p> Send a spacecraft here: </p>
                                        {
                                            otherSpacecrafts.map(
                                                spacecraft =>
                                                (
                                                    <div key={spacecraft.id} className="Planets-Spacecraftcontainer">

                                                        <p>{spacecraft.name}</p>

                                                        <button onClick={() => handleSend(spacecraft.id, planet.id)}
                                                            className="Planets-SpacecraftBtn"
                                                        >
                                                            Send Here
                                                        </button>

                                                    </div>
                                                )
                                            )
                                        }

                                    </div>
                                </div>

                            )
                        }
                    )
                }
            </div>

            {
                isError && (<p> Something went wrong!!</p>)
            }
        </div >
    )
}

export default Planets;