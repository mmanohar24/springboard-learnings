const TodoList = (props) => {
    // const todos = [
    //     <li> Take a shower </li>,
    //     <li> Finish Costco Shopping </li>,
    //     <li> Car Wash </li>,
    //     <input type = "checkbox" id = "checkbox1"/>
    //     // <label for = "checkbox1" Dog bath />
    // ]


    return (
        <div>
            <h4> Todo List </h4>
            <ul> {props.todos.map(t =>
            (
                <li key = {t}>
                    <input type="checkbox" />
                    {t}
                </li>
            )
            )} </ul>
        </div>
    )
}