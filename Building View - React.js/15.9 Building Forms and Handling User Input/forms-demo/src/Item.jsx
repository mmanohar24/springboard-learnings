function Item({ id, name, quantity }) {
    return (
        <div>
            <ul key={id}>
                <li> {name} {quantity} </li>
            </ul>
        </div>
    )
}

export default Item;