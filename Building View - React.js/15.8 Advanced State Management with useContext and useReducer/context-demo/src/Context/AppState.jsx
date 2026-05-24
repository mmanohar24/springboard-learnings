import { useState } from "react"
import AppContext from "./AppContext"

const AppState = ({ children }) => {


    const [isAuth, setAuth] = useState(false);

    return (
        <AppContext.Provider value={
            {
                isAuth,
                setAuth,
                message: 'This is from AppState Context component'
            }
        }>

            {
                children
            }

        </AppContext.Provider>
    )
}

export default AppState
