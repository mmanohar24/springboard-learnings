import { useState } from "react";
import Die from "./Die";
import "./Dice.css"

const Dice = ({ numDice = 6, title = "Main Game", maxVal = 20 }) => {

    const [numbers, setNumbers] = useState(Array.from({ length: numDice }));

    // const dice = []
    // for (let i = 0; i < numDice; i++) {
    //     const num = Math.floor(Math.random() * maxVal + 1);
    //     dice.push(num);
    // }

    const handleRollDice = () => {
        setNumbers(numbers =>
        (
            numbers.map(
                n => Math.floor(Math.random() * maxVal + 1)
            )
        ))
    }

    return (
        <div className="Dice">

            <h2> {title} </h2>

            <div>
                {
                    numbers.map(number => (<Die value={number} />))
                }
            </div>

            <button className="Dice-button" onClick={handleRollDice}> Roll </button>
        </div>
    )

}

export default Dice