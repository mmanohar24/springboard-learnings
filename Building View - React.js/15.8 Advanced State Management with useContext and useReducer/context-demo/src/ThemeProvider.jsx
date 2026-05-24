import { useState } from "react";
import ThemeContext from "./Context/ThemeContext";

function ThemeProvider({ children }) {

    const [color, setColor] = useState('orange');

    const toggleColor = () => {
        setColor(color => color === 'orange' ? 'purple' : 'orange')
    }

    return (
        <ThemeContext.Provider value={{ color, toggleColor }}>

            {

                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;