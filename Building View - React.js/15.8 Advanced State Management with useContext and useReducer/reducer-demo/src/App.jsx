// import { useReducer } from 'react'
import Counter from './Counter';
import Todos from './Todos';
import Demo from './Demo';
import './App.css'


// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1> This is App Component!! </h1>

      <Counter />

      {/* <Demo /> */}

      {/* <Todos /> */}
      {/* <p> Count: {count} </p>

      <div>

        <button onClick={() => dispatch({ type: 'INCREMENT' })}> Increment </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}> Decrement </button>
      </div> */}
    </div>
  )
}

export default App
