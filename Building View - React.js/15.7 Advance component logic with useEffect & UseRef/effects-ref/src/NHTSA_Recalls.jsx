import { useEffect, useState } from "react";
import axios from "axios";

function NHTSA_Recalls({ make, model, modelYear, color }) {

    const [data, setData] = useState(null);

    useEffect(() => {

        async function loadRecalls() {
            const response = await axios.get(`https://api.nhtsa.gov/recalls/recallsByVehicle?make=${make}&model=${model}&modelYear=${modelYear}`);
            const manufacturer = response.data.results?.[0]?.Manufacturer || "No results found";
            setData(manufacturer);
        }
        loadRecalls();
    }, [make, model, modelYear]);

    return (
        <div>
            <h3 style={{ color }}> {data ? data : 'Loading ↻'} </h3>
        </div>
    )
}

export default NHTSA_Recalls;