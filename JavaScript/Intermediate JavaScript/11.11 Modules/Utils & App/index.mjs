// Implement the index.mjs, which aggregates and re-exports all utility functions from the utils directory, facilitating a single point of import.

import { capitalize } from './stringUtils.mjs';
import { add, subtract, multiply, divide } from './numberUtils.mjs';