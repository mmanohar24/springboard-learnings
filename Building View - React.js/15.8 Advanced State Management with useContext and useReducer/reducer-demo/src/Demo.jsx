import { useReducer } from "react";


function reducer(state, action) {

    switch (action.type) {
        case 'increment':
            {
                const newCount = state.count + 1;
                const hasError = newCount > 5;
                return {
                    ...state, count: hasError ? state.count : newCount,
                    error: hasError ? "Maximum reached" : null
                }
            }

        case 'decrement':
            {
                const newCount = state.count - 1;
                const hasError = newCount < 0;

                return {
                    ...state, count: hasError ? state.count : newCount,
                    error: hasError ? "Minimum reached" : null
                }
            }
        default:
            return state;
    }
}

function Demo() {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });

    return (
        <div className="Demo">
            <h2> This is a Demo Component of useReducer!! </h2>

            <div> Count is: {state.count} </div>

            {
                state.error && <div> {state.error} </div >
            }

            <button
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </button>

            <button
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>

        </div>
    )
}

export default Demo;