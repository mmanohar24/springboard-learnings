import { useEffect, useState } from "react";
import { getUsers, updateUser, deleteUser } from "../api/users";

import '../CSS/Admin.css'

function Admin() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        setError('')

        try {
            const data = await getUsers();
            setUsers(data)
        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    async function handleActivate(user) {
        try {
            const updated = await updateUser({ ...user, state: 'active' })
            setUsers(
                users.map((u) => (u.id === updated.id ? updated : u))
            )
        }
        catch (error) {
            setError(error.message)
        }
    }

    async function handleDeactive(user) {
        try {
            const updated = await updateUser({ ...user, state: 'pending' })
            setUsers(
                users.map((u) => (u.id === updated.id ? updated : u))
            )
        }
        catch (error) {
            setError(error.message)
        }
    }

    async function handleDelete(user)
    {
        try
        {
            await deleteUser(user)
            setUsers( users.filter( (u) => u.id !== user.id ))
        }
        catch(error)
        {
            setError(error.message)
        }
    }

    if (loading) {
        return <div className="loading-user-success"> Loading Users... </div>
    }

    if (error) {
        return <div className="loading-user-error"> {error}</div>
    }

    return (
        <div className="admin-container">
            <h1> Admin: Users </h1>


            <table className="admin-table">

                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> State </th>
                        <th> Action </th>
                        <th> Deactive </th>
                        <th> Delete User </th>
                    </tr>
                </thead>

                <tbody>

                    {
                        users.map(
                            (user) => (
                                <tr key={user.id}>
                                    <td>
                                        {user.firstName} {user.lastName}
                                    </td>

                                    <td> {user.email} </td>

                                    <td>
                                        <span
                                            className={
                                                user.state === 'active' ? 'text-green-600' : 'text-yellow-600'
                                            }>
                                            {
                                                user.state
                                            }
                                        </span>
                                    </td>

                                    <td>
                                        {
                                            user.state === 'pending' &&
                                            (
                                                <button className="admin-container-activeBtn" onClick={() => handleActivate(user)}>
                                                    Active
                                                </button>
                                            )
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.state === 'active' &&
                                            (
                                                <button className="admin-container-deactiveBtn" onClick={() => handleDeactive(user)}>
                                                    Deactive
                                                </button>
                                            )
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.state === 'active' &&
                                            (
                                                <button className="admin-container-deleteBtn" onClick={() => handleDelete(user)}>
                                                    Delete
                                                </button>
                                            )
                                        }
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Admin;