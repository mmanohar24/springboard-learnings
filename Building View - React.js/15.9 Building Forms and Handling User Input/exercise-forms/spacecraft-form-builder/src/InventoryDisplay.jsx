import ItemAction from "./ItemAction";
import ItemCard from "./ItemCard";
import "./InventoryDisplay.css"

function InventoryDisplay({ inventory, deleteItem }) {
    return (
        <ul className="InventoryDisplay">
            {

                inventory.map(
                    item => (

                        <li
                            key={item.id}
                            className="InventoryDisplay-item"
                        >
                            < ItemCard
                                name={item.name}
                                quantity={item.quantity}
                                purpose={item.purpose}
                            />

                            < ItemAction onDelete={() => deleteItem(item.id)} />
                        </li>
                    )
                )
            }

        </ul>
    )
}

export default InventoryDisplay;