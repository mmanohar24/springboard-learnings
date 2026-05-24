/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const name = "Manoj";
const age = 26;
const studyField = "Human Computer Interaction";

const participant = { name, age, studyField };
console.log(participant);


/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantInfo = 
{
    ...participant,
    displayInfo()
    {
        console.log(` Participant Info: Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`)
    }
}
participantInfo.displayInfo();


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*
 * Observations: Arrow functions do not have their own 'this' context; theu use this from the outer scope instead of the object they belong to.
 * TODO: Explain here.
 */

const participantInformation =
{
    ...participant,
    displayInfo: () =>
    {
        console.log(` Participant Info using Arrow: Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`)
    }
}
participantInformation.displayInfo();


/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(obj, propName, value)
{
    return { ...obj, [propName]: value };
}
const updatedParticipant = updateParticipantInfo(participant, "age", 27);
console.log(updatedParticipant);