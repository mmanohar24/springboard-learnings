// Implement `storeManager.mjs` that imports the functions from `inventory.mjs` to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

import { addItem, removeItem, listItems } from './inventory.mjs';

addItem('Laptop');
addItem('Smartphone');
addItem('Tablet');
listItems();

removeItem('Smartphone');
console.log('After performing removeItem:');
listItems();