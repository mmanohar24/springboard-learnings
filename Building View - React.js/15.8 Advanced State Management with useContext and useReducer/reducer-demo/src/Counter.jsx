import { useReducer, useState } from "react";

function reducerFunction(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        case 'initializeCount':
            return {
                ...state,
                count: Number(action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    count: 0
}

function Counter() {

    const [input, setInput] = useState(0);
    const [state, dispatch] = useReducer(reducerFunction, initialState)

    return (
        <div>
            <h3> This is a Counter Component!! </h3>

            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={() => dispatch({ type: 'initializeCount', payload: input })}
            > Initialize Counter </button>

            <p> {state.count} </p>

            <button
                onClick={() => dispatch({ type: 'increment' })}
            > Increment </button>

            <button
                onClick={() => dispatch({ type: 'decrement' })}
            > Decrement </button>
        </div>
    )
}

export default Counter;