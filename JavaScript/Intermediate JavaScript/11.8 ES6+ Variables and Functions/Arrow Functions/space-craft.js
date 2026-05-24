/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activeHyperdrive = () => console.log("Hyperdrive activated!");
activeHyperdrive();


/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());


/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinated = (x,y,z) => ( { x:x, y:y, z:z } )
console.log(currentCoordinated(10,20,30));


/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = 
{
    operator: "Manoj Manoharan",
    receiveMessage: (message) => 
        {
            console.log(`Message received: ${this.message}`)
            console.log(`The operator name is: ${this.operator}`)
        }
}
spacecraft.receiveMessage("All systems go");

/*
 * Observations:
 * TODO: When calling 'receiveMessage', 'this' does not refer to the 'spacecraft' object. Instead, it refers to the Window object for global scope. This is because arrow functions do not have their own 'this' context.
 */
