import { useDispatch, useSelector } from "react-redux"

const Users = () => {
    const users = useSelector((state) => state.userInfo.users);
    const dispatch = useDispatch();

    const deleteUser = (index) => {
        dispatch(deleteUser(index))
    }

    return (
        <div>

            <h2> This is Users Page </h2>

            {
                users?.map(
                    (user, index) =>
                    (
                        <div key={index}>
                            <p> {user.firstname} {user.lastname} </p>
                            <p> {user.email} </p>
                            <p> {user.contactnumber} </p>

                            <button
                                onClick={deleteUser(index)}
                            > Delete User </button>
                        </div>
                    )
                )
            }

        </div>
    )
}

export default Users
