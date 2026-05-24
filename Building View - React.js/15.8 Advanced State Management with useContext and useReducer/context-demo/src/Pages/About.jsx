import { useContext } from "react";
import AppContext from "../Context/AppContext";
import UserContext from "../Context/UserContext";

function About() {

    const { user } = useContext(UserContext);
    const { message, isAuth, setAuth } = useContext(AppContext);
    return (
        <div style={
            {
                background: isAuth ? 'purple' : 'pink'
            }
        }>
            <h3> This is About Page Component!!</h3>

            <h4> Message: {message} </h4>
            <pre> {JSON.stringify(user, null, 2)} </pre>

            {
                isAuth ?
                    <button
                        onClick={() => setAuth(false)}
                    > Log Out </button> : <button
                        onClick={() => setAuth(true)}
                    > Login </button>
            }
        </div>
    )
}

export default About;