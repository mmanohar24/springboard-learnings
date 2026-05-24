import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import CountContext from "./CountContext";
import "./GreatGreatGrandChild.css"

function GreatGreatGrandChild() {

    const { count, incrementCount, decrementCount } = useContext(CountContext);
    const { color } = useContext(ThemeContext);
    return (
        <div
            className="GreatGreatGrandChild"
            style={
                {
                    border: '4px solid yellow',
                    margin: '1rem',
                    borderRadius: '5px'
                }
            }>
            <p> This is Great Grand Child Component!!</p>
            <p style={{ color }}> I also consume: {count}</p>

            <div className="GreatGreatGrandChild-btns">
                <button
                    className="GreatGreatGrandChild-incrementBtn"
                    onClick={incrementCount}
                > Increment Count </button>

                <button
                    className="GreatGreatGrandChild-decrementBtn"
                    onClick={decrementCount}
                >
                    Decrement Count
                </button>
            </div>


        </div>
    )
}

export default GreatGreatGrandChild;