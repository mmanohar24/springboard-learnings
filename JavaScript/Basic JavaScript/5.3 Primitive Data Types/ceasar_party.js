// Description: This code uses a Caesar cipher to encrypt and decrypt a message about a party location.

// Technical Skills Survey Project II - Exercise 1: The Story of Caesar's Traditional Secret Party

// Question 2 & 3 - Identified the variables and their types
const shiftBy = 3;
let partyLocation = "Secret Garden";
let encryptedMessage = "VHFUHW JDUGHQ"
let decryptedMessage = "Secret Garden";
let isPartySafe = true

// Question 4 - Number.isInteger method is used to check if the value is an integer
Number.isInteger(shiftBy);

// # **Technical Skills Survey Project Part 2: Exercise 2 - Meeting with Caesar's Best Friend**

const friend = "BRUTUS"
const shiftValue = 3;

// Store the Latin alphabet in a variable with all letters in lowercase.

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2 - Find the index of the first letter of Ceaser's friend. Store it in a variable.
const friendIndex = alphabet.indexOf(friend[0].toLowerCase()); //1
console.log(friendIndex); // 1

// Question 1 - Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
/*
    It uses a zero based index, which means the first letter of alphabet is at index 0, the second letter is at index 1, and so on.
    So, 'a' is at index 0, 'b' is at index 1, etc.
*/

// Step 3 - Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.
const index = friendIndex + shiftValue; // 1 + 3 = 4
const encryptedLetter = alphabet[index] 
console.log(encryptedLetter); // e

// Question 2 - If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?

/*
    The modulo operator (%) can be used to wrap around the alphabet.
*/

// Step 4 - Determine the length of the alphabet.
const alphabetLength = alphabet.length;
console.log(alphabetLength) // 26

// Step 5 - Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.
const wrappedIndex = index % alphabetLength;
console.log(wrappedIndex); // 4

// Step 6 - Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)
const encryptMessage = "EUXWXV"
const slicedMessage = encryptMessage.slice(0,3);
console.log(slicedMessage); // EUX

// Technical Skills Survey Project Part 2: Exercise 3 - Creating a Secret Shift Value for Caesar

// Step 1 Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's Math functions.
const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31
const randonRange = Math.floor(randomDecimal * range) + 3

// Step 2 - Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const minShiftValue = 3;
const maxShiftValue = 33;
const shiftRange = maxShiftValue - minShiftValue + 1;

// ## Question 1 - Why did we add 1 to the difference between 33 and 3?
/*
    We add 1 because the range is inclusive of both endpoints (3 and 33).
    For example, 33 - 3 gives 30 and it shows how many possible integers are in the range 3 to 33.
    To include both endpoints, we need to add 1, so the range becomes 31.
*/

// Step 3 - Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
const randomShiftValue = randomDecimal * range

// Question 2 - How does multiplying randomDecimal by range help us get a number within our desired range?

// Step 4 - Round down the decimal number obtained in Step 3 to get a whole integer.
const randomInteger = Math.floor(randomShiftValue);

// Question 3 - Why do we use the Math.floor() function instead of other rounding methods like Math.round()?
/*
    We use Math.floor() to always round down to the nearest whole number, which remains within the desired range of 3 and 33.
*/

// Step 5 - Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const shift = randomInteger + minShiftValue;

// Question 4 - How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
/*
    Adding 3 shifts the range from 0 – 30 up to 3 – 33, matching Caesar's desired shift range.
*/


// # **Technical Skills Survey Project Part 2: Exercise 4 - The Secret Emblem** of Caesar's Invitation

const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

/*
    Step 1 Use a series of `if`, `else if`, and `else` statements to decipher the first clue.
    
    - If `emblemClue1` is "Eagle", the location starts with "Forum".
    - If `emblemClue1` is "Lion", the location starts with "Colosseum".
    - Otherwise, the location starts with "Villa".
*/

let startLocation = ""
if (startLocation === "Eagle")
{
    console.log("The location starts with Forum")
}
else if (startLocation === "Lion")
{
    console.log("The second location starts with Colosseum")
}
else
{
    console.log("The location starts with Villa")
}

/*
    Step 2 Use boolean logic to decipher the second clue.
    
    - If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
    - If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.
*/

if (emblemClue2 === "Laurel" && startLocation === "Forum")
{
    startLocation += " of Augustus"
}
else if (emblemClue2 === "Grapes" || startLocation === "Villa")
{
    startLocation += " of Pompey"
}

/*
    Step 3 - Use the switch statement to decipher the third clue.
    
    - Depending on the value of `emblemClue3`, append a direction to the location.
        - 7 is "North"
        - 3 is "South"
        - 9 is "East"
        - 4 is "West"
*/

switch(emblemClue3)
{
    case 7:
        startLocation += " North";
        break;
    case 3:
        startLocation =+ "South";
        break;
    case 9:
        startLocation += "East";
        break;
    case 4:
        startLocation += "West";
        break;
}

// Question Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
// Because '==' checks for value equality but not type equality whereas '===' checks for both value and type equality.


// Technical Skills Survey Project Part 2: Exercise 5 - Caesar's Party Guest List

const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1 - Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.
guests.unshift("BRUTUS")

// Question 1 - How can you verify that "BRUTUS" was added to the beginning of the array?
//  We can verify by printing the updated array to the console, which should show "BRUTUS" as the first element in the array.
console.log("Updated Guest List:", guests); // ["BRUTUS", "ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]

// Step 2 - A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA")
console.log(guests) // // ["BRUTUS", "ANTONY", "CICERO", "CASSIUS", "CLEOPATRA", "AUGUSTUS", "LUCIA"]

// Step 3 - Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.
console.log(guests.includes("SPARTACUS"))

//  Question 2 - What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
//  If the value isn't added to the list, the index would be -1.

// Step 4 - Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.
guests.splice(guests.indexOf("CASSIUS"), 1)
console.log(guests)

//  Step 5 - Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.
const specialGuests = guests.slice(0,3)
console.log(specialGuests)

/*
    Step 6 - Caesar decides he wants the guest list in alphabetical order. Sort the array.
    However, Caesar wants his most honored guest (the one added first) to remain at the top of the list.
    Can you think of a way to sort the guests but keep the honored ones at the top?
*/
const honoredGuest = guests.slice(0,1)
const sortedGuests = guests.slice(1).sort();
const finalGuestList = honoredGuest.concat(sortedGuests)
console.log(finalGuestList)

// Technical Skills Survey Project Part 2: Exercise 6 - Caesar's VIP Guest Directory

const guestsVIP = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

// Step 1 - Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".
guestsVIP.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan food",
    pastGifts: ["Silver Dagger", "Marble Bust"]
}
console.log(guestsVIP);

// Step 2 - Update CICERO's past gifts to include a "Golden Lyre".
guestsVIP.CICERO.pastGifts.push("Golden Lyre");
console.log(guestsVIP.CICERO.pastGifts)

// Step 3 - Retrieve the region of "ANTONY".
guestsVIP.ANTONY.region;
console.log(guestsVIP.ANTONY.region)

// Step 4 - Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.
delete guestsVIP.CICERO;
console.log(guestsVIP);

// Step 5 - Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".
const generalProfile = guestsVIP.ANTONY;
generalProfile.region = "Egypt";
console.log(guestsVIP);

// Question 1 - After executing Step 5, what will be the region of ANTONY in the original guests object?
// The region of Antony will be updated to "Egypt" in the original guestsVIP object because generalProfile is referencing the Antony object.

// Technical Skills Survey Project Part 2: Exercise 7 - Meeting Again with Caesar's Best Friend

const friendName = "BRUTUS"
const shifter = 3;

// Step 1 Recall the Latin alphabet variable from the previous exercise.
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2 - Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.

let encryptedLocation = ''
for( let i = 0; i < friendName.length; i++)
{
    const letter = friendName[i].toLowerCase();
    const index = latinAlphabet.indexOf(letter);
    const wrappedIndex = (index + shifter) % latinAlphabet.length;
    encryptedLocation += latinAlphabet[wrappedIndex].toUpperCase();
}
console.log(` The encrypted location is: ${encryptedLocation}`)

// Question 1 - What advantage does using a loop provide over manually encrypting each letter?
// Using a loop automates the encryption process, allowing us to handle any length of the name without manually writing out for each letter. This makes the code more efficient and scalable to different names or lengths.

// Question2 - Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
// "%latinAlphabet.length" makes sure that if the index exceeds the length of the alphabet, it wraps around to the beginning of the alphabet. This makes the encryption works for all letters.

// Technical Skills Survey Project Part 2: Exercise 8 - Caesar's Cipher Reloaded

function encrypted(letter, shiftValue)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCase = letter.toLowerCase();
    const index = alphabet.indexOf(lowerCase);
    const wrappedLetterIndex = (index + shiftValue) % alphabet.length;
    let encryptedMessage = alphabet[wrappedLetterIndex].toUpperCase();
    return encryptedMessage;
}

function decrypted(letter, shiftValue)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCase = letter.toLowerCase();
    const index = alphabet.indexOf(lowerCase);
    const wrappedLetterIndex = (index - shiftValue + alphabet.length) % alphabet.length;
    let encryptedMessage = alphabet[wrappedLetterIndex].toUpperCase();
    return encryptedMessage;
}

// Step 1 - Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

function encryptedChar(letter, shiftValue)
{
    return encrypted(letter, shiftValue)
}

// Step 2 - Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

function encryptedMessages(word, shiftValue)
{
    let encryptedWord = '';
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of word)
    {
        encryptedWord += encrypted(char, shiftValue);
    }
    return encryptedWord;
}

// Step 3 - Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

function decryptedChar(letter, shiftValue)
{
    return decrypted(letter, shiftValue)
}

// Step 4 - Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

function decryptedMessages(word, shiftValue)
{
    let decryptedWord = '';
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of word)
    {
        decryptedWord += decrypted(char, shiftValue);
    }
    return decryptedWord;
}

// Question 1 - If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not?
// Yes, Caesar will get "BRUTUS" back because the encryption and decryption functions are designed to reverse each other's operations. The shift value is the same for both functions, which ensures that the original word can be recovered after encryption and decryption.

// Technical Skills Survey Project Part 2- Helping Caesar's Traditional Secret Party

// Description: This code uses a Caesar cipher to encrypt and decrypt a message about a party location.
function mod(n,m)
{
    return ((n % m) + m) % m; // Ensure the result is always positive
}

// This code uses a Caesar Cipher to encrypt and decrypt each letter.
function encryptLetter(letter, shiftValue)
{
    const lower = letter.toLowerCase();
    if(!alphabet.includes(lower)) return letter; // If the letter is not in the alphabet, return it as is.

    const index = alphabet.indexOf(lower);
    const wrappedIndex = mod(index + mod(shiftValue, 26), 26); // Making sure the shift value is within the range of 0 - 25
    const encryptedLetter = alphabet[wrappedIndex];
    return letter === letter.toUpperCase() ? encryptedLetter.toUpperCase() : encryptedLetter;
}

function decryptLetter(letter, shiftValue)
{
    const lower = letter.toLowerCase();
    if(!alphabet.includes(lower)) return letter; // If the letter is not in the alphabet, return it as is.
    const index = alphabet.indexOf(lower);
    const wrappedIndex = mod(index - mod(shiftValue, 26), 26); // Making sure the shift value is within the range of 0 - 25
    const decryptedLetter = alphabet[wrappedIndex];
    return letter === letter.toUpperCase() ? decryptedLetter.toUpperCase() : decryptedLetter;
}

// This code encrypts a message by shifting each letter by 42 and inserting a random character after every 2 valid letters.
function encryptMessages(message, shiftValue)
{
    let encryptedMessage = '';
    // Initialize a counter to keep track of valid letters
    let counter = 0;

    for (let char of message)
    {
        // Check if the character is a letter in the alphabet
        const isLetter = alphabet.includes(char.toLowerCase());

        // Encrypt the letter if it's in the alphabet
        encryptedMessage += isLetter ? encryptLetter(char, shiftValue) : char;

        // Insert a random character after every 2 valid letters
        if(isLetter)
        {
            counter++;
            // If the counter reaches 2, insert a random character
            if(counter === 2)
            {
                // Insert a random character from the alphabet
                encryptedMessage += alphabet[Math.floor(Math.random() * alphabet.length)];
                counter = 0; // Reset the counter after inserting a random character
            }
        }
    }
    return encryptedMessage;
}

// This code decrypts a message by shifting each letter back by 42 and skipping every 2nd character after a valid letter.
function decryptMessage(encryptedMessage, shiftValue)
{
    let decryptedMessage = '';
    // Initialize a counter to keep track of valid letters
    let counter = 0;

    // Iterate through each character in the encrypted message
    for (let i = 0; i < encryptedMessage.length; i++)
    {
        // Gets the current character
        const char = encryptedMessage[i];

        // Decrypt the letter if it's in the alphabet
        decryptedMessage += decryptLetter(char, shiftValue);
        counter += 1;

        // If the counter reaches 2, skip the next character
        if(counter === 2)
        {
            // If the next character is a letter, skip it
            if( i + 1 < encryptedMessage.length)
            {
                i += 1;
            }
            counter = 0;
        }
    }
    return decryptedMessage;
}


const questMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
// const questMessage = "Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri."
console.log(decryptMessage(questMessage, 42));

