import { useState } from "react";
import './UserForm.css'

function UserForm() {

    // Controlled Components

    const INITIAL_STATE = {
        username: "",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isInvalid, setIsinvalid] = useState(true);
    const [isTouched, setIstouched] = useState(false);

    const handleChange = (event) => {


        const { name, value } = event.target;

        if (name === 'email') {
            setIsinvalid(value.trim() === '');

        }
        setFormData(data => ({
            ...data,
            [name]: value
        })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { username, email, password } = formData;

        if (!isInvalid) {
            alert(`Created user, ${username} with email ${email} and password ${password}`);
            setFormData(INITIAL_STATE);
        }
    }

    return (
        <div
            className="UserForm"
            onSubmit={handleSubmit}
        >
            <h2> This is UserForms Component!!</h2>

            <form
                className="UserForm-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="username"> Enter username </label>

                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="email"> Enter email </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}

                    onBlur={() => setIstouched(true)}
                />

                {
                    isInvalid && isTouched && <span style={{ color: 'red' }}> Email cannot be blank! </span>
                }

                <label htmlFor="password"> Enter password </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter passwprd"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                > Sign Up </button>

            </form>

        </div>
    )
}

export default UserForm;