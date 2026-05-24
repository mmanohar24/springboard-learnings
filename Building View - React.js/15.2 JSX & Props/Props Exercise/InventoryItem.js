function InventoryItem({ name, type, quantity = 0, price = 0 }) {
    return (
        <li>
            <h3>{name} ( {type}) </h3>
            <Message quantity={quantity} price={price} />
        </li>
    );
}