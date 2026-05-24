// import { useState } from "react";
import { Form, redirect, useActionData } from "react-router";
import "../CSS/Contact.css"

export const contactAction = async ({ request }) => {

    console.log(request);
    const data = await request.formData();

    const submission = {
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password')
    }

    console.log(submission);

    // Send post request
    if (submission.password.length < 8) {
        return {
            error: "Password must be over 10 chars long!"
        }
    }

    // Rederict the user
    return redirect('/')
}

function Contact() {

    const data = useActionData();

    // const INITIAL_STATE = {
    //     name: "",
    //     email: "",
    //     phone: ""
    // }

    // const [formData, setFormData] = useState(INITIAL_STATE);

    // const handleChange = (event) => {

    //     const { name, value } = event.target
    //     setFormData(data => ({
    //         ...data,
    //         [name]: value
    //     })
    //     );
    // }

    return (
        <div className="Contact">
            <h4> This is Contact Component</h4>

            <Form className="Contact-form" method="post" action="/help/contact">

                <label htmlFor="name"> Enter Username </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Username"
                // value={formData.values.name}
                // onChange={handleChange}
                />

                <label htmlFor="email"> Enter email </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                // value={formData.values.name}
                // onChange={handleChange}
                />

                <label htmlFor="email"> Enter password </label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder="Enter password"
                // value={formData.values.name}
                // onChange={handleChange}
                />

                <button
                    className="Contact-formBtn"
                > Sign Up </button>

                {
                    data && data.error && <p> {data.error} </p>
                }

            </Form>
        </div>
    )
}

export default Contact;