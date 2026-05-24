import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewItemForm from "./NewItemForm";
import Item from "./Item";

function ShoppingList() {

    const INITIAL_STATE = [
        {
            id: uuid(),
            name: '',
            quantity: ''
        }
    ]
    const [items, setItems] = useState(INITIAL_STATE);

    const addItem = ({ newItem }) => {
        setItems(items => [...items,
        {
            ...newItem,
            id: uuid()
        }
        ])
    }

    return (
        <div>
            <h3> Shopping List </h3>

            <NewItemForm addItem={addItem} />

            {
                items.map(item => <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                />)
            }

        </div >
    )
}

export default ShoppingList;