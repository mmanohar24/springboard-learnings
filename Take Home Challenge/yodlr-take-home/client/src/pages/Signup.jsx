import { useState } from "react";
import { createUser } from "../api/users";

import '../CSS/SignUp.css';

function SignUp() {

    const [formData, setFormData] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
        }
    );

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        )
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setStatus('Submitting')
        setErrorMessage('')


        try {
            await createUser(formData)
            setStatus('success')
            setFormData({ email: '', firstName: '', lastName: '' })
        }
        catch (error) {
            setStatus('error')
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="SignUp">

            <h1> User Registration </h1>

            {
                status === 'success' && (<p className="SignUp-text-success"> Account created </p>)
            }

            {
                status === 'error' && (<p className="SignUp-text-error"> {errorMessage} </p>)
            }

            <form onSubmit={handleSubmit} className="SignUp-form">

                <label htmlFor="firstName"> First Name </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName"> Last Name </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email"> Email  </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="SignUp-formBtn"
                >
                    {
                        status === 'submitting' ? 'Submitting...' : 'Sign Up'
                    }
                </button>

            </form>



        </div>
    )
}

export default SignUp;