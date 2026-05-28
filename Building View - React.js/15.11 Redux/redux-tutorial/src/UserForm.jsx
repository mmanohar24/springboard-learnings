import { useState } from "react"
import "./UserForm.css"
import { useDispatch } from "react-redux"
import { setUsers } from "./slices/userSlice";


const UserForm = () => {

    const dispatch = useDispatch();

    const INITIAL_STATE = [{
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: ""
    }]

    const [formInput, setFormInput] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormInput(
            (currentItem) => {
                return {
                    ...currentItem,
                    [name]: value
                }
            }
        )
    }

    const addUser = (event) => {
        event.preventDefault();
        dispatch(setUsers(formInput))
    }

    return (
        <div className="UserForm">

            <h2> Add Users </h2>

            <form>
                <label htmlFor="firstname"> Enter First Name</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formInput.firstname}
                    onChange={handleChange}
                />

                <label htmlFor="lastname"> Enter Last Name</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formInput.lastname}
                    onChange={handleChange}
                />

                <label htmlFor="email"> Enter Email </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formInput.email}
                    onChange={handleChange}
                />

                <label htmlFor="contactnumber"> Enter Contact Number </label>
                <input
                    type="text"
                    id="contactnumber"
                    name="contactnumber"
                    value={formInput.contactnumber}
                    onChange={handleChange}
                />

                <button type="button" className="UserForm-addUserbtn" onClick={addUser}> Add User</button>
            </form>

        </div>
    )
}

export default UserForm
