import { useDispatch, useSelector } from "react-redux";

import { decrementCount, incrementByValue, incrementCount, selectAllStates } from "../redux/counterSlice"
import "./Counter.css"

function Counter() {

    const count  = useSelector(selectAllStates);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1> The count is {count} </h1>

            <div className="App-btns">
                <button onClick={() => dispatch(incrementCount())}> Increment </button>
                <button onClick={() => dispatch(decrementCount())}> Decrement </button>
                <button onClick={() => dispatch(incrementByValue(33))}> Increment by 33 </button>

            </div>
        </div>
    )
}

export default Counter;