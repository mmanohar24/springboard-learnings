import { useLoaderData, Link } from "react-router";
import "../CSS/Careers.css"

export const careersLoader = async () => {

    const response = await fetch('http://localhost:4000/careers');

    if (!response.ok) {
        throw Error("Couldn't fetch the careers on time.")
    }

    return response.json();
}


function Careers() {

    const careerData = useLoaderData();

    return (
        <div className="Careers">

            {
                careerData.map(
                    career => (
                        <Link to={career.id.toString()} key={career.id}>
                            <p> {career.title}</p>
                            <p> Location: {career.location} </p>
                            {/* <p> Salary: {career.salary} </p> */}
                        </Link>
                    )
                )
            }
        </div>
    )
}

export default Careers;