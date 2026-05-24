function ItemCard({ name, quantity, purpose }) {
    return (
        <div>
            <h1> {name} </h1>
            <p> {quantity} </p>
            <p> {purpose} </p>
        </div>
    )
}

export default ItemCard;