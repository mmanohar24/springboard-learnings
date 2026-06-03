import { useState } from "react";

import "../CSS/LoginForm.css"

function LoginForm() {

    const INITIAL_STATE = {
        username: '',
        password: '',
        message: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(data => ({
            ...data,
            [name]: value
        })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = formData;

        if (username === 'test@test.com' && password === 'test@123$') {
            setFormData(data =>
            (
                {
                    ...data,
                    message: 'Loading'
                }
            )
            )
            setTimeout(
                () => {
                    setFormData(data =>
                    (
                        {
                            ...data,
                            message: 'Succeessfully Loggedin'
                        }
                    )
                    )
                }, 3000
            )

        }
        else {
            setTimeout(
                () => {
                    setFormData(data =>
                    (
                        {
                            ...data,
                            message: 'Invalid Credentials'
                        }
                    )
                    )
                }, 3000
            )
        }
    }

    return (

        <div
            className="LoginForm">
            <h2> Login Form </h2>

            <form
                className="LoginForm-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="username"> Enter Email </label>

                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Email"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="password"> Enter password </label>

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                > Sign In </button>
            </form>

            {
                formData.message && <p> {formData.message} </p>
            }

        </div>

    )
}

export default LoginForm;