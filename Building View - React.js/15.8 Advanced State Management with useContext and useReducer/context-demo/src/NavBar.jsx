import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

function NavBar() {

    const { color, toggleColor } = useContext(ThemeContext);
    return (
        <div>
            <nav
                style={{ backgroundColor: color }}
            >
                <span> Website </span>

                <button onClick={toggleColor}> Toggle Color </button>
            </nav>

        </div>
    )
}

export default NavBar;