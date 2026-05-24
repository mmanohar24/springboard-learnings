import './ShoppingList.css'
import ShoppingListItem from "./ShoppingListItem";

const items = [
    { id: 1, item: "Milk", price: 3.99, quantity: 1 },
    { id: 2, item: "Eggs", price: 12.99, quantity: 12 },
    { id: 3, item: "Salmon", price: 31.99, quantity: 14 },
    { id: 4, item: "Blueberry", price: 10.99, quantity: 18 },
    { id: 5, item: "Lemons", price: 0.99, quantity: 21 }
]



function ShoppingList() {
    return (
        <div className="ShoppingList">
            <h3> Here's my Shopping List: </h3>

            <ul>
                {
                    items.map(item => {
                        return (
                            <ShoppingListItem
                                key={item.id}
                                item={item.item}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShoppingList;