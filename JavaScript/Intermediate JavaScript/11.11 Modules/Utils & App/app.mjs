// Create app.mjs that imports utilities from the aggregated utils/index.mjs and demonstrates their use.

import { capitalize } from './stringUtils.mjs';
import { add, subtract, multiply, divide } from './numberUtils.mjs';

const str = "manoj manoharan";

console.log(`Original String: ${str}`);
console.log(`Capitalized String: ${capitalize(str)}`);

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);