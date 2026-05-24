// Implement `inventory.mjs`, exporting named functions: `addItem` that adds an item by name to the inventory array, `removeItem` that removes an item by name from the inventory array, `listItems` that logs all item names currently in the inventory.

export const inventory = [];

export function addItem(itemName)
{
    inventory.push(itemName);
}

export function removeItem(itemName)
{
    const index = inventory.indexOf(itemName);
    if( index !== -1) inventory.splice(index, 1);
}

export function listItems()
{
    if( inventory.length === 0)
    {
        console.log('Inventory is empty.');
        return;
    }
    
    console.log('Current Inventory: ');
    inventory.forEach( item => console.log(item) );
}
