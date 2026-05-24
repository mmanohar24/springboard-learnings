import { v4 as uuid } from "uuid";
import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {

    const [inventory, setInventory] = useState([]);

    const addItems = (newItem) => {
        setInventory(items => [
            ...items,
            {
                ...newItem,
                id: uuid()
            }
        ])
    }

    const deleteItem = (id) => {
        setInventory(
            prevItem => (
                prevItem.filter(item => item.id !== id)
            )
        )
    }

    return (
        <div>
            <h2> Spacecraft Form Component </h2>

            <ItemForm addItem={addItems} />

            <InventoryDisplay inventory={inventory} deleteItem={deleteItem} />
        </div>
    )
}

export default SpacecraftBuilder;
