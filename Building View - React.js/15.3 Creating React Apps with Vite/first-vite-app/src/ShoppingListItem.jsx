import './ShoppingListItem.css'

function ShoppingListItem({ item, price, quantity }) {
    return (
        <li className="ShoppingListItem" style ={ { color: price > 3 ? "red" : "green"} }>
            <b> {item} </b> - ${price} | Quantiy: {quantity}
        </li>
    )
}

export default ShoppingListItem;