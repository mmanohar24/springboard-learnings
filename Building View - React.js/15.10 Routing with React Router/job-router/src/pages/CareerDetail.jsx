import { useLoaderData, useParams } from "react-router";
import "../CSS/CareerDetail.css"

export const careerDetailLoader = async ({ params }) => {
    const { id } = params;

    const response = await fetch(`http://localhost:4000/careers/${id}`);

    if (!response.ok) {
        throw Error("Couldn't find this carrer")
    }

    return response.json();
}

function CareerDetail() {

    const { id } = useParams();
    const career = useLoaderData();

    return (
        <div className="CareerDetail">

            <h1> {career.title} </h1>

            <p> Salary:  {career.salary} </p>

            <p> Location: {career.location} </p>

            <div>
                Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolor. Magni, optio dolores nostrum dolorem recusandae suscipit libero! Eos cumque sunt blanditiis in et qui repellat architecto omnis earum eius?
            </div>
        </div>
    )
}

export default CareerDetail;

