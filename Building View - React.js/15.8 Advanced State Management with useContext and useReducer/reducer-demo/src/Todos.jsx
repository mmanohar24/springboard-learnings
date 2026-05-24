import { useState } from 'react';
import { useReducer } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case 'add-todo':
            return { todos: [...state.todos, { text: action.text, completed: false }], todoCount: state.todoCount + 1 }
        case 'toggle-todo':
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t),
                todoCount: state.todoCount
            }
        default:
            return state;
    }
}

function Todos() {
    const [{ todos, todoCount }, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 });
    const [text, setText] = useState();

    return (
        <div>
            <h2> This is Todo Component!! </h2>

            <p> Number of Todos: {todoCount} </p>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: 'add-todo', text })
                    setText("");
                }
                }
            >
                <input value={text} onChange={e => setText(e.target.value)} />
            </form>

            {
                todos.map((t, idx) =>
                (
                    <div
                        key={t.text}
                        onClick={() => dispatch({ type: 'toggle-todo', idx })}
                        style={
                            {
                                textDecoration: t.completed ? 'line-through' : ""
                            }
                        }
                    >
                        {t.text}
                    </div>
                )
                )
            }
        </div>
    )
}

export default Todos
