import { useState } from "react";
import "./SimpleCounter.css";

function SimpleCounter() {
    const [counter, setCounter] = useState(0);
    // const [decrement, setDecrement] = useState(0);

    const countIncrement = () => { setCounter(counter + 1) }

    const countDecrement = () => { setCounter(counter > 0 ? counter - 1 : 0) }

    const resetCountIncrement = () => { setCounter(0) }

    return (
        <div className="SimpleCounter">
            <h3> Counter: {counter} </h3>

            <div className="SimpleCounter-buttons">

                <button
                    className="SimpleCounter-incrementBtn"
                    onClick={countIncrement}
                >
                    Increment
                </button>

                {/* <h3> Counter: {counter} </h3> */}
                <button
                    className="SimpleCounter-decrementBtn"
                    onClick={countDecrement}
                >
                    Decrement
                </button>

                <button
                    onClick={resetCountIncrement}
                    className="SimpleCounter-resetBtn"
                >
                    Reset
                </button>
            </div>

        </div>
    )
}

export default SimpleCounter