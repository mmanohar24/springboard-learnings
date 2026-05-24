import { useContext } from "react";
import UserContext from "../Context/UserContext";
import Login from "../utils/Login";

function Index() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h2> This is a Index Page Component! </h2>

            <pre> {JSON.stringify(user, null, 2)}</pre>

            {
                user ? (
                    <button
                        onClick={() => {
                            setUser(null);
                        }
                        }
                    > Logout</button>
                ) : <button
                    onClick={async () => {
                        const user = await Login()
                        setUser(user);
                    }}
                > Login </button>
            }

        </div>
    )
}

export default Index;