// Problem Solving - Practice

/*
    Pseudocode:

    1. Define a function that takes number as an argument.
    2. Check if the number is divisible by 3 and 5.
        - If divisible by 3, return "Fizz".
        - If divisible by 5, return "Buzz".
        - If divisible by both, return "FizzBuzz".
        - If not divisible by either, return the number itself.
        - print error if unexpected input is given.
*/

function fizzBuzz(number)
{
    if(!Number.isInteger(number) || number < 1 || number >= 100)
    {
        console.log("Error")
        return   
    }

    for (let i = 1; i <= number; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            console.log("FizzBuzz");
        }
        else if(i % 3 !== 0 && i % 5 !== 0)
        {
            console.log(i);
        }
        else if(i % 3 === 0)
        {
            console.log("Fizz");
        }
        else if(i % 5 === 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log("Error: Unexpected input");
        }
    }
}

/*
    Pseudocode:

    1. Define a function that takes a string as an argument.
    2. Takes string as an argument, returns a dictionary with the count of each character.
    3. If word is not a string, print error.
    4. Create a dictionary to store character counts.
    5. Loop through each character in the string.
        - If character is not in the dictionary, add it with a count of 1.
        - If character is already in the dictionary, increment its count.
    6. Return the dictionary with character counts.
*/

function letterOccurence(word)
{
    let letterCount = {};
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if(typeof word !== 'string')
    {
        console.log("Error: Input must be a string");
        return;
    }

    for (let letter of word)
    {
        let lowerCase = letter.toLowerCase();
        
        if(letterCount[lowerCase] !== undefined)
        {
            letterCount[lowerCase]++;
        }
        else
        {
            letterCount[lowerCase] = 1;
        }
    }
    return letterCount;
}