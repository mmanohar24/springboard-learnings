import { useContext } from "react";
import CountContext from "./CountContext";
import ThemeContext from "../Context/ThemeContext";
import GreatGreatGrandChild from "./GreatGreatGrandChild";
import "./GreatGrandChild.css"

function GreatGrandChild() {

    const { count, incrementCount } = useContext(CountContext);
    const { color } = useContext(ThemeContext);

    return (
        <div
            className="GreatGrandChild"
            style={
                {
                    border: '4px solid red',
                    margin: '1rem',
                    borderRadius: '5px'
                }
            }>
            <p> This is Great Grand Child Component!!</p>
            <p style={{ color }}> Count: {count}</p>

            <button
                className="GreatGrandChild-incrementBtn"
                onClick={incrementCount}
            > Increment Count </button>

            <GreatGreatGrandChild />


        </div>
    )
}

export default GreatGrandChild;