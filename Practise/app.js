/*
alert("It works!");

let firstName = "Manoj"
let lastName = "Manoharan"
let userAge = 26

let result = `${firstName} ${lastName} is ${userAge} years old.`
console.log(result);

let name = 'Nicholas Cage';
let age = 54;
let job = 'actor';

let bio = `${name} is a ${age} year-old ${job}.`;

console.log(bio);

// If statement


let number = 21;

if (number % 2 === 0)
{
    console.log("The number is even")
}
else
{
    console.log("The number is odd")
}

let rating = 4

if (rating === 3)
{
    console.log("You are a superstar")
}
else if (rating === 2)
{
    console.log("Meets expectations")
}
else if (rating === 1)
{
    console.log("Needs improvement")
}
else
{
    console.log("You have no rating yet")
}


let password = "mypassword123";

// if (password.length >= 6)
// {
//     if (password.indexOf(' ') === -1)
//     {
//         console.log("Password is valid")
//     }
//     else
//     {
//         console.log("Password cannot contain spaces")
//     }
// }
// else 
// {
//     console.log("Password must be longer")
// }

if (password.length >= 6 && password.indexOf(' ') === -1 )
{
    console.log("Password is valid")
}
else 
{
    console.log("Password is invalid")
}

// Arrays

let shoppingList = ['milk', 'eggs', 'bread', 'butter']

const manojWhoopData = {
    firstName: "Manoj",
    lastName: "Manoharan",
    totalSteps: 6000,
    sleep: "78%",
    recovery: "91%",
    strain: 11.0
}

const numbers = {
    100: "One Hundred",
    16: "Sixteen"
}


const myDreamCar = {
    make: "BMW",
    model: "M5 Competition",
    year: 2019,
    package: {
        engine: "4.4 liter Twin Turbo V8 Engine",
        power: "600 hp",
        torque: "553 lb",
        transmission: "8 speed automatic transmission",
        drivetrain: "All wheel drive"
    },
    topspeed: "155 mph"
}

let nums = [1,2,3]
let nums2 = [1,2,3]

let nums3 = nums2

let cities = ["San Francisco", "Los Angeles", "New York", "Chicago", "Syracuse"]

for (let i = 0; i < cities.length; i++)
{
    console.log(`The general for loop: ${cities[i]}`)
}

let j = 0
while (j < cities.length)
{
    console.log(`The while loop: ${cities[j]}`)
    j++
}

for (let city of cities)
{
  console.log(`The for..of loop: ${city}`);
}

const city = {
  name: "San Francisco",
  state: "California",
  population: 871000,
  bridges: 2
}

for (let key in city) {
  console.log(key, city[key]);
}

let numbersArray = [23, 45, 67, 89, 12, 34, 56, 78, 90];
let total = 0
for (let i = 0; i < numbersArray.length; i++)
{
    total += numbersArray[i];
}
console.log(`The total is: ${total}`)


function checkEvenNumber(num)
{
    if (num % 2 === 0)
    {
        console.log(`The number ${num} is even`)
    }
    else
    {
        console.log(`The number ${num} is odd`)
    }
}

checkEvenNumber(10);

function rollDice()
{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${randomNumber}`);
    // return Math.floor(Math.random() * 6) + 1;
}

rollDice();

function sum(num1, num2)
{
    if (typeof(num1) === 'number' && typeof(num2) === 'number')
    {
        console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`)
    }
    else
    {
        console.log('Both inputs must be integer')
    }
}

sum('45',65)


// function isValidPassword(password, username)
// {
//     if(password.length < 8)
//     {
//         return false;
//     }
//     if(password.indexOf(' ') !== -1)
//     {
//         return false;
//     }
//     if(password.indexOf(username) !== -1)
//     {
//         return false;
//     }

//     return true;
// }



function isValidPassword(password, username)
{
    if(password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1)
    {
        return false;
    }

    return true;
}


isValidPassword('dogluver123', 'manojahre') 


function findAvg(arr)
{
    let total = 0
    for (let value of arr)
    {
        total =+ value
    }
    return total / arr.length
}

function isPangram(str)
{
    let lowerCase = str.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz')
    {
        if(lowerCase.indexOf(char) === -1)
        {
            return false;
        }
    }
    return true;
}

function pick(arr)
{
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

function getCard()
{
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    return {value: pick(values), suit: pick(suits)}
}

Console.log debugging

function hasEnoughMoney(balance, amountToBuy, quantity)
{
    // Round to 2 decimal places in JavaScript
    const subTotal = Math.round(amountToBuy * quantity * 100) / 100;
    console.log(`Subtotal: ${subTotal}`)
    console.log(`Balance: ${balance}`)

    if (subTotal <= balance)
    {
        return 'YOU CAN PURCHASE THE PRODUCTS'
    }
    return 'INSUFFICIENT FUNDS'
}

// NOT ENOUGH MONEY
hasEnoughMoney(300, 50.5, 10)
hasEnoughMoney(600.0, 200.3, 5)

// ENOUGH MONEY
hasEnoughMoney(60, 10, 6)
hasEnoughMoney(100, 30, 3)
hasEnoughMoney(600.9, 200.3, 3)


let grades = [99, 98, 76, 54, 66, 90, 81];
let sum = 0;

for (let grade of grades)
{
    sum += grade;
}

let avg = sum / grades.length;

// Try...Catch

// Put something in try block that might throw an error
// try
// {
//     functionThatDoesNotExist();
//     let msg = 'Hello'
// }
// catch(Error)
// {
//     console.log('Caught an error')

//     console.log('--------------')
//     console.log('Catch Error is:', Error)
// }
// console.log('This will throw an error')

function displayInitials(user)
{
    let firstName = user.firstName[0].toUpperCase();
    let lastName = user.lastName[0].toUpperCase();

    return `Hello, ${firstName}.${lastName}`;
}

displayInitials({firstName: 'Manoj', lastName: 'Manoharan'})

// Throwing your own errors
console.log('I AM BEFORE THE ERROR')
// throw "I AM THE ERROR"

try
{
    console.log('I AM INSIDE THE TRY BLOCK')
    throw new Error("I AM THE ERROR")
}
catch(error)
{
    console.log('CAUGHT AN ERROR')
    // console.log('ERROR:', error)
    // console.dir(error)

    console.log('What kind of error:', error.name)
    console.log('What is the error:', error.message)
    console.log('Where is the error:', error.stack)
}
finally
{
    console.log('I AM INSIDE THE FINALLY BLOCK')
}
console.log('I AM AFTER THE ERROR')



function reverseString(str)
{
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--)
    {
        reversedStr += str[i];
    }
    return reversedStr;
}


function stringReverse(str)
{
    return str.split('').reverse().join('')
}


function addUpToFirst(n)
{
    let total = 0;
    let counter = 0;

    for (let i = 1; i <= n; i++)
    {
        total += i;
        counter += 1;
    }
    console.log(`Sum of first ${counter} natural numbers: ${total}`);
    return total;
}

function bubbleSort(arr)
{
    for (let i = 0; i < arr.length; i++)
        {
            for(let j = 0; j < arr.length; j++)
                {
                    if( arr[j] > arr[j+1])
                    {
                        let temp = arr[j]
                            arr[j] = arr[j+1]
                            arr[j+1] = temp
                    }
                }
        }
}

function bubbleSort2(arr)
{
    let counter = 0;
    for (let i = 0; i < arr.length; i++)
        {
            for(let j = 0; j < arr.length - i; j++)
                {
                    counter++;
                    if( arr[j] > arr[j+1])
                    {
                        let temp = arr[j]
                            arr[j] = arr[j+1]
                            arr[j+1] = temp
                    }
                }
        }
    console.log('Counter:', counter)
    return arr;
}

function bubbleSort3(arr)
{
    let counter = 0;
    for (let i = 0; i < arr.length; i++)
        {
            let swapped = false;
            for(let j = 0; j < arr.length - i; j++)
                {
                    counter++;
                    if( arr[j] > arr[j+1])
                    {
                        let temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                        swapped = true
                    }
                }
            if(!swapped) break;
        }
    console.log('Counter:', counter);
    return arr;
}

// Merge Array and Sort
function merge(arr1, arr2)
{
    const results = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length)
        {
            if (arr1[i] < arr2[j])
            {
                results.push(arr1[i]);
                i++;
            }
            else
            {
                results.push(arr2[j])
                j++;
            }
        }
    while (i < arr1.length)
        {
            results.push(arr1[i])
            i++
        }
    while (j < arr2.length)
        {
            results.push(arr2[j])
            j++;
        }
    return results;
}

// Merge Sort Recursive
function mergeSort(arr)
{
    //base case
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}




    // Runtime of Linked List:
    // 1. Going to "next" item: O(1)
    // 2. GOing to item by arbitrary index: O(n)
    // 3. Searching for value: O(n)
    // 4. General insertion or deletion: O(n)
    // 5. Insertion at the beginning: O(1)
    // 6. Insertion at the end:
    //   6.1 If no tail pointer: O(n)
    //   6.2 If tail pointer: O(1)
    // 7. Deletion at the beginning: O(1)
    // 8. Deletion at the end: O(n)


// class Node
//     {
//         constructor(val)
//         {
//             this.val = val;
//             this.next = null;
//         }
//     }

// const firstPage = new Node('google.com');
// const secondPage = new Node('facebook.com')
// const thirdPage = new Node('amazon.com')

// firstPage.next = secondPage;
// secondPage.next = thirdPage;


class Node
    {
        constructor(val, next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

const firstPage = new Node('google.com', new Node('reddit.com', new Node('amazon.com') ) );

class LinkedList
    {
        // Initialize the linked list with a head property set to null.
        constructor()
        {
            this.head = null;
        }
        
        // Loop through the linked list and print each node's value and updating the head to the next node.
        traverse()
        {
            let currentNode = this.head;
            while(currentNode)
                {
                    console.log(currentNode.val)
                    currentNode = currentNode.next
                }
        }

        // Loop through the linked list and find a specific node's value and return true if found else return false.
        find(val)
        {
            let currentNode = this.head;
            while(currentNode)
                {
                    if(currentNode.val === val) return true;
                    currentNode = currentNode.next;
                }
            return false
        }
    }

const history = new LinkedList();
history.head = firstPage;

// Object Oriented Programming

// Constructor Functions

let Person = function(name, gender, birthYear)
{
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calculateAge = function()
    {
        let currentYear = new Date().getFullYear();
        let age = currentYear - this.birthYear;
        console.log(`${this.name} is ${age} years old.`);
        // return currentYear - this.birthYear;
    }

Person.prototype.city = "New York";


let manoj = new Person('Manoj', 'Male', 1999);
console.log(manoj)

let khadijah = new Person('Khadijah', 'Female', 1999);
console.log(khadijah)

let users = [
    {
        'name': 'Sri',
        'gender': 'Male',
        'birthYear': 1992
    },
    {
        'name': 'Subhi',
        'gender': 'Female',
        'birthYear': 1997
    },
    {
        'name': 'Hari',
        'gender': 'Male',
        'birthYear': 1992
    }
];

// users.prototype = new Person(); - This doesn't work because users is an array of objects not a constructor function.
// Only constructor functions have prototype property.

for(let user of users)
{
    let person = new Person( name = user.name, gender = user.gender, birthYear = user.birthYear);
    console.log(person)
    console.log(person.calculateAge())
    console.log(person.city)
}

// Chaining in JavaScript

// Every object we create in JavaScript is directly or indirectly an instance of object constructor.
// Every object has prototype property which makes inheritance possible.

let mark = 
{
    name: 'Mark',
    birthYear: 1999,
    gender: 'Male'
}


    let mark = new Object() -> Empty Object
    mark.name = 'Mark'
    mark.birthYear: 1999,
    mark.gender: 'Male'



let studentMark = function(studentName, studentGender, studentMark, studentId)
{
    this.studentName = studentName;
    this.studentGender = studentGender;
    this.studentMark = studentMark;
    this.studentId = studentId;
}

studentMark.prototype.calculateGrade = function()
{
    switch(true)
    {
        case (this.studentMark >= 90):
            return 'A';
        case (this.studentMark >= 80):
            return 'B';
        case (this.studentMark >= 70):
            return 'C';
        case (this.studentMark >= 60):
            return 'D';
        default:
            return 'F';
    }
}


let studentObjects = [
    {
        studentName: 'Cibi',
        studentGender: 'Male',
        studentMark: 80,
        studentId: 101
    },
    {
        studentName: 'Midhunesh',
        studentGender: 'Male',
        studentMark: 90,
        studentId: 102
    },
    {
        studentName: 'Shreedar',
        studentGender: 'Male',
        studentMark: 70,
        studentId: 103
    },
    {
        studentName: 'Aishwarya',
        studentGender: 'Female',
        studentMark: null,
        studentId: 104
    }
];


for(let student of studentObjects)
{
    let studentObj = new studentMark(student.studentName, student.studentGender, student.studentMark, student.studentId);
    console.log(studentObj)
    console.log(`Grade: ${studentObj.calculateGrade()}`)
}

// JavaScript Classes
// There are 2 ways to create classes

// 1. Class Declaration
class Car
{
    // Every class has a special method called constructor

    constructor(make, model, year, price, averageSalary)
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.averageSalary = averageSalary;
    }
    averageSalaryToBuy()
        {
            console.log( `The average salary person need to make to afford ${this.make} ${this.model} car is: ${ (this.price / this.averageSalary) * 12 }` )
        }
}


let bmw = new Car('BMW', 'M5 Competition', 2019, 120000, 200000)
console.log(bmw)
console.log(bmw.averageSalaryToBuy())


let audi = new Car('AUDI', 'S4', 2019, 120000, 200000)
console.log(audi)
console.log(audi.averageSalaryToBuy())


// 2. Class Expression
// let Car = class
// {

// }

// Getter and Setter


    Accessor Properties:
        1. Getter Properties - read objects property value => get()
        2. Setter Properties - set or update objects property value => set()
    
    Encapsulation - hide data from outside world. Since, the non-necessary data is hidden from outside world,
    we need getter and setter methods to access and manipulate those data.


let person = 
{
    firstName: 'Manoj',
    lastName: 'Manoharan',
    age: 26,

    get fullName()
    {
        return ` ${ this.firstName } ${ this.lastName } `
    },

    set setFullName(newName)
    {
        let nameParts = newName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}

console.log(` Using Get Method, the name is: ${person.fullName}`)
person.setFullName = 'Sri Manoharan'
console.log(` Using Set Method, the name is: ${person.fullName}`)

// Static Methods

class User
{
    constructor(name, birthYear, email)
    {
        this.name = name;
        this.birthYear = birthYear;
        this.email = email;
    }

    calAge()
    {
        let currentYear = new Date().getFullYear();
        let age = currentYear - this.birthYear;
        console.log(`${this.name} is ${age} years old.`)
    }

    static greet(user)
    {
        console.log(` Hey, how are you doing, ${user.name}?`)
    }
}

let john = new User('John', 1999, 'manojcareers24@gmail.com')
console.log(john);

User.greet(john)


// Object.create() method

let person1 = 
{
    calAge()
    {
        return new Date().getFullYear() - this.birthYear
    },

    greet()
    {
        return 'Have a nice day!'
    },

    init( name, birthYear, gender)
    {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }
}

let john1 = Object.create(person1);

john1.name = 'John';
john1.birthYear = 1999;
john1.gender = 'Male';

console.log(john1)
console.log(john1.calAge())
console.log(john1.greet())

let merry1 = Object.create( person1, 
    {
        name: {value: 'Merry'},
        birthYear: {value: 1999},
        gender: {value: 'Female'}
    } 
);

console.log(merry1)
console.log(merry1.calAge())
console.log(merry1.greet())

let mark1 = Object.create(person1);
mark1.init('Mark', 2002, 'Male')
console.log(mark1)


// One Function inherits another function
let Person2 = function(name, gender, birthYear)
{
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person2.prototype.calculateAge = function()
    {
        let currentYear = new Date().getFullYear();
        let age = currentYear - this.birthYear;
        console.log(`${this.name} is ${age} years old.`);
        // return currentYear - this.birthYear;
    }

let derek = new Person2("Derek", 'Male', 1993)
console.log(derek);

// Employee Function Constructor

let Employee = function(employeeName, gender, birthYear, empId, salary)
{
    Person2.call(this, employeeName, gender, birthYear);
    this.empId = empId;
    this.salary = salary;
}

Employee.prototype = Person2.prototype;

Employee.prototype.calSalary = function()
{
    return this.salary * 12;
}

Employee.prototype.empDetails = function()
{
    console.log(`${this.empId} ${this.name}`)
}

let alex = new Employee('Alex', 'Male', 1995, 101, 120000)
console.log(alex);
console.log(alex.calculateAge())
console.log(alex.empDetails());
console.log(`The salary of ${alex.name} is ${alex.salary}`)


// Inheritence between classes

class PersonClass
{
    constructor(name, birthYear, gender)
    {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    calAge()
    {
        console.log( new Date().getFullYear() - this.birthYear )
    }
}

class EmployeeClass extends PersonClass
{
    constructor(name, birthYear, gender, empId, salary)
    {
        super(name, birthYear, gender)
        this.empId = empId;
        this.salary = salary;
    }

    calSalary()
    {
        return this.salary * 12;
    }

    empDetails()
    {
        console.log(`${this.name} ${this.empId}`)
    }
}

let callie = new EmployeeClass('Callie', 1992, 'Female', 201, 12243234)
console.log(callie);
console.log(callie.calAge());
console.log(callie.calSalary());
console.log(callie.empDetails());

// ES2015 Introductions

var instructor = "Colt";

function greet()
{
    var message = "Welcome!"
    var instructor = "Colt Ellie"
}

console.log(greet());

// Hoisting

// Generally, if we use var to declare a variable, we need to assume that the variable is moved to the top of the file and initialized with a value of undefined.
// But if we use let or const to declare a variable, the variable is not initialized until the line of code where it is defined is executed.

console.log(chickens); //undefined
var chickens = ["butters", "legs", "drumsticks"];
console.log(chickens); // ["butters", "legs", "drumsticks"]

//console.log(dogs); // ReferenceError: Cannot access 'dogs' before initialization
let dogs = ["butters", "legs", "drumsticks"];
console.log(dogs); // ["butters", "legs", "drumsticks"]

// Arrow Functions

// Function Expression
const square = function(x)
{
    return x * x;
}

// OR

const square2 = (x,y) => { return x * y}
console.log(square2(5,6));


[2,3,6,78,99,104,23].reduce( function(max, currNum)
{
    return Math.max(max, currNum);
} )

// [2,3,6,78,99,104,23].reduce( (max, currNum) => { console.lof(Math.max(max, currNum )) } )

// [1,2,3].forEach( (n, index) => {console.log( n, index ) } );

// Arrow Functions Shortcuts

// If I have only one parameter, I can remove the parentheses around the parameter.
// [1,2,3,4].forEach( n => { console.log( n * 2 ) } );

// If I have no parameters, I can use empty parentheses.
const greet2 = () => { console.log("Hello World!") };

// Implicit Return
[1,2,3,4].filter( n => n % 2 === 0 );

// Arguments Object

// function sum()
// {
//     return arguments.reduce( (a,b) => a + b );
// }

function sum()
{
    const args = Array.from(arguments);
    return args.reduce( (a,b) => a + b );
}

// Rest

function sum2(...nums)
{
    return nums.reduce( (a,b) => a + b );
}

function makeFamily(parent1, parent2, ...kids)
{
    console.log(parent1, parent2);
    console.log(kids);
    console.log(kids[0]);
    console.log(kids[1]);
}

const filterByType = ( type, ...values) =>
{
    return values.filter( (v) => typeof v === type );
};

// SPREAD ARRAY

const palatte = ['red', 'blue', 'green', 'yellow' ];
const paletteCopy = [...palatte];

const greenTea = ['snow jasmine', 'fragmented pear', 'dragonwell'];
const oolongTea = ['milk oolong', 'winter sprout', 'alishan'];
const herbalTea = ['chamomile', 'hibiscus', 'lemongrass'];
const coffee = ['espresso', 'cold brew', 'cappuccino'];

const allTeas = [...greenTea, ...oolongTea, ...herbalTea];

// SPREAD OBJECTS

const tea = 
{
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
}

const teaClone = {...tea};

const teaWithPrice = {...tea, price: 4.99};

// Object Shorthand

function makePerson(firstName, lastName, age)
{
    return {
        firstName,
        lastName,
        age
    }
}

// Object Methods Shorthand

// const mathStuff = 
// {
//     x: 200,
//     add: function(a,b)
//     {
//         return a + b;
//     },
//     square: function(x)
//     {
//         return x * x;
//     }
// }

const mathStuff =
{
    x: 200,
    add(a,b)
    {
        return a + b;
    },
    square(x)
    {
        return x * x;
    }
}

// Computed Property Names
// function makeColor(name, hex)
// {
//     return
//     {
//         [name]: hex
//     };
// }

// ES2015
let firstName = "Mary";

let instructors =
{
    [firstName]: "That's me!"
}

// Object Destructuring
const teaOrder = 
{
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 4.99,
    hasCaffeine: true
}

// Before Destructuring
// const variety = teaOrder.variety;
// const teaName = teaOrder.teaName;
// const origin = teaOrder.origin;

// After Destructuring
const {variety, teaName, origin} = teaOrder;

const { brewTemp = 175} = teaOrder;

// Rename Destructuring Variables
const { price: cost, hasCaffeine: caffeineContent} = teaOrder;

// Array Destructuring
const teaLeaves = ['oolong', 'winter sprout', 'taiwan', 4.99, true];

const [type, teaname, ,price, ...restTea] = teaLeaves;

// Function Destructuring

// function getTotal(teaOrder)
// {
//     const name = teaOrder.teaName;
//     const price = teaOrder.price;
//     return `The total for ${name} is ${price}`;
// }

function getTotal( {teaName, price} )
{
    return `The total for ${teaName} is ${price}` ;
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet', 'India', 'Beatrice'];
const swinMeetResults = ['Asia', 'Noelle', 'Aubrey', 'Layla', 'Diana'];

function awardMedals( [gold, silver, bronze] )
{
    return {gold, silver, bronze}

}

// Swapping Variables using Destructuring

let deliciousTea = 'oolong';
let disgustingTea = 'earl grey';

[disgustingTea, deliciousTea] = [deliciousTea, disgustingTea]

// Callbacks

function holler()
{
    console.log("Holler!")
}

function add(x, y)
{
    return x + y
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

function power(x, y)
{
    return Math.pow(x,y)
}

function doMath(a, b, operation)
{
    return operation(a, b);
}

const mathFuncs = [add, subtract, multiply, divide, power];

function doAllMath(a,b, mathFuncs)
{
    for(let func of mathFuncs)
    {
        console.log(func(a,b));
    }
}

// For Each

const colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach( function(value, index)
{
    console.log(`Index: ${index}, Value: ${value.toUpperCase()}`)
})

mathFuncs.forEach( function(func)
{
    console.log( func(10, 5) );
})

const prices = [23.99, 45.50, 12.99, 78.00, 34.75];

let total = 0;
prices.forEach( function(price)
{
    total += price;
})
console.log(`Total Price: ${total}`)

// Array ForEach

const numbers = [1, 2, 3, 4, 5];
numbers.forEach( function(number, i, numbers) 
{
    console.log( `${number * 2} at Index: ${i} in Array: ${numbers}`);
} )

// Map Method

const numberMap = [1, 2, 3, 4, 5];

const tens = numberMap.map( function(value)
{
    return value * 10;
});

const todos = [
    {
        id: 1,
        text: 'Walk the dog',
        priority: 'High'
    },
    {
        id: 2,
        text: 'Clean the house',
        priority: 'Medium'
    },
    {
        id: 3,
        text: 'Do the laundry',
        priority: 'Low'
    }
];

const todoText = todos.map( function(value)
{
    return value.text;
});

const links = Array.from(document.querySelectorAll('a'));
const hrefs = links.map( function(link)
{
    return link.href;
});

function myMap(arr, callback)
{
    const mappedArray = [];
    for( let i = 0; i < arr.length; i++)
    {
        mappedArray.push( callback(arr[i], i, arr))
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo)
{
    return todo.priority;
})


const repeatedString = myMap(['a', 'b', 'c', 'd'], function(str, idx) {
    return str.repeat(idx)
});

// Filters
const words = ['spray', 'lmt', 'elite', 'exuberant', 'destruction', 'present', 'happy', 'dog', 'cat', 'dinosaursssssss', 'supercalifragilisticexpialidocious'];

const containsVowel = function(word)
{
    for(let char of word)
    {
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char)
{
    return 'aeiouAEIOU'.includes(char);
}

const sOrDWords = words.filter( function(word)
{
    return word[0] === 's' || word[0] === 'd';
})

const containVowels = words.filter( containsVowel );

const noVowels = words.filter( function(word)
{
    return !containsVowel(word)
})

function extractCompletedTodos()
{
    const allCheckedBoxes = document.querySelectorAll('input[ type = "checkbox"]');

    return Array.from(allCheckedBoxes).filter( function(checkbox) { 
        return checkbox.checked;
    })
    .map( function(checkbox)
    {
        return checkbox.value;
    })
}

// const words = ['spray', 'lmt', 'elite', 'exuberant', 'destruction', 'present', 'happy', 'dog', 'cat', 'dinosaursssssss', 'supercalifragilisticexpialidocious'];

function myFilter(arr, callback)
{
    const filteredArray = [];
    for( let i = 0; i < arr.length; i++)
    {
        if(callback(arr[i], i, arr))
        {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const shortWords = myFilter(words, function(word) {
    return word.length === 3;
});

const everyEvenIndexValues = myFilter(words, function(word, i)
{
    return i % 2 === 0;
})


// Some and Every

// Some Method

const longWords = ['immunoelectrophoretically', 'thyroparathyroidectomized', 'psychoneuroendocrinological', 'hepaticocholangiogastrostomy', 'spectrophotofluorometrically', 'thyroparathyroidectomized', 'cysts', 'crypt', 'dog', 'cat', 'tsktsk'];

const hasLongWords = longWords.some( function(word)
{
    return word.length > 20;
})

const hasLongWords1 = longWords.some( function(word)
{
    return word.indexOf('thyroid') !== -1;
})

// Every Method

const checkEveryThyroidWords = longWords.every( function(word)
{
    return word.indexOf('thyroid') !== -1;
})

const checkEveryWordLength = longWords.every( function(word)
{
    return word.length >= 3;
})

function allString(arr)
{
    return arr.every( function(w)
    {
        return typeof w === 'string';
    })
}

// DOM Manipulation and Events

// Selecting Button elements
const button = document.querySelector('button');

// Adding Event Listener to the button
button.addEventListener('click', function(e)
{
    // Collecting all the checkboxes and checking if all are checked
    const checkboxes = document.querySelectorAll('input[type = "checkbox"]');

    // Using Array.from to convert NodeList to Array
    const allChecked = Array.from(checkboxes).every( function(checkbox)
    {
        return checkbox.checked;
    })
    // If all checkboxes are not checked, alert the user
    if(!allChecked) alert('Please agree to all terms and conditions.');
})

// My Own Some Method

function mySome(arr, callback)
{
    for( let i = 0; i < arr.length; i++)
    {
        if(callback(arr[i], i, arr)) return true;
    }
    return false;
}

const checkEvenNum = mySome([1, 2, 3, 4, 5], function(num)
{
    return num % 2 === 0;
})

// My Own Every Method
function myEvery(arr, callback)
{
    for( let i = 0; i < arr.length; i++)
    {
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}

const checkEveryEvenNum = myEvery([1, 2, 3, 4, 5], function(num)
{
    return num >= 1;
})

myEvery([1, 2, 3, 4, 5, 6], function(num)
{
    return Number.isInteger(num);
})

// Find and FindIndex

// Find Method
function myFind(arr, callback)
{
    for( let i = 0; i < arr.length; i++ )
    {
        if( callback(arr[i], i, arr) ) return arr[i];
    }
    return undefined;
}

const scores = [10, 25, 30, 15, 40, 5, 90, 92, 85, 93];

const findScore = myFind(scores, function(score)
{
    return score > 90;
})

// FindIndex
function myFindIndex(arr, callback)
{
    for( let i = 0; i < arr.length; i++)
    {
        if( callback(arr[i], i, arr)) return i;
    }
    return -1;
}

const findScoreIndex = myFindIndex(scores, function(score)
{
    return score > 100;
})

// Reduce Method

// const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85]

// let total = 0;
// for(let num of nums)
// {
//     total += num;
// }
// console.log(total);

// let min = 0;
// for(let i = 0; i < nums.length; i++)
// {
//     if( nums[i] < min) min = nums[i];
// }
// console.log(min);

// const str = 'lallapalooza';
// const charFreq = {};

// for(let char of str)
// {
//     if(charFreq[char]) charFreq[char] += 1;
//     else charFreq[char] = 1;
// }
// console.log(charFreq);

const words = ["hello", "world", "how", "are", "you"];

const results = words.reduce( function(accumulator, nextWord)
{
    console.log(`Accumulator: ${accumulator}, Next Word: ${nextWord}`);
    return accumulator + ' ' + nextWord;
})

const midtermScores = [92, 83, 91, 87, 79, 88, 95, 84, 81, 90];
const finalScores = [88, 79, 92, 85, 80, 91, 89, 76, 95, 94];

const minScore = midtermScores.reduce( function(minValue, nextScore)
{
    return nextScore < minValue ? nextScore : minValue;
})

const maxScore = midtermScores.reduce( function(maxValue, nextScore)
{
    return nextScore > maxValue ? nextScore : maxValue;
})

const totalScore = finalScores.reduce( function(total, nextValue)
{
    return total + nextValue
}, 10);


// Modules

// Global Scope
    // Module Scope
        // Function Scope
            // Block Scope


// IIFE - Immediately Invoked Function Expression [ Before ES6 Modules ]
var fightModule = ( function()
{
    var harry = 'potter';
    var voldemort = 'He who must not be named';

    function harryPotter(char1, char2)
    {
        var attack1 = Math.floor( Math.random() * char1.length);
        var attack2 = Math.floor( Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} wins!` : `${char2} wins!`
    }

    return {
        harryPotter: harryPotter
    }
})();

// CommonJS and AMD

// var module1 = require('module1');
// var module2 = require('module2');

// function fight()
// {

// }

// module.exports = {
//     fight: fight
// };


// ES6 Modules
const harry = 'potter';
const voldemort = 'He who must not be named';

export function name()
{
    console.log('Harry Potter');
}

export default function harryPotter(char1, char2)
{
    const attack1 = Math.floor( Math.random() * char1.length );
    const attack2 = Math.floor( Math.random() * char2.length );
    return attack1 > attack2 ? `${char1} wins!` : `${char2} wins!`
}

// ES7 and ES8 New Features

// String.prototype.padStart() and String.prototype.padEnd()
const string = 'Mano';

// Pad Start - adds characters to the beginning of the string until it reaches the specified length.
const paddedStringStart = string.padStart(10, '*');
// Pad End - adds characters to the end of the string until it reaches the specified length.
const paddedStringEnd = string.padEnd(10, '-');

console.log(paddedStringStart);
console.log(paddedStringEnd);

// Object.Values - returns an array of a given object

const student = {
    name: 'Manoj',
    age: 26,
    favCourses: ['Data Structures', 'Algorithms', 'Operating Systems']
}
const values = Object.values(student);
console.log(values);

// Object.Entries - returns an array of a given object's key value pairs
const entries = Object.entries(student);
console.log(entries);

// Async Functions - functions that return a Promise and can be paused using the await keyword.

function walkDog()
{
    return new Promise( (resolve, reject) => 
    {
        setTimeout(() => 
        {
            const dogWalked = true;

            if(dogWalked) resolve(' Dog walked successfully! ');
            else reject(' Dog walk failed! ');
        }, 1000);
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            const kitchenCleaned = false;

            if(kitchenCleaned) resolve(' Kitchen cleaned successfully!')
            else reject('Kitchen cleaning failed!')
        }, 1500);
    });
}

function takeOutTrash()
{
    return new Promise( (resolve, reject) =>
    {
        setTimeout(() =>
        {
            const trashTakenOut = true;
            
            if(trashTakenOut)
            {
                resolve('Trash taken out successfully!')
            }
            else
            {
                reject('Trash taking out failed!')
            }
        }, 2000);
    })
}

async function doChores()
{

    try
    {
        const dogWalkingResult = await walkDog();
        console.log(` Dog Walking Results: ${dogWalkingResult}`);

        const kitchenCleanResults = await cleanKitchen();
        console.log(` Kitchen Cleanning Results: ${kitchenCleanResults}`)

        const trashCleaningResult = await takeOutTrash();
        console.log(` Trash Taking Out Results: ${trashCleaningResult}`)
    }
    
    catch(err)
    {
        console.error(` Error: ${err} `)
    }
}

doChores();

// allSettled - it waits for all promises and tells whether they are resolved or rejected.
async function doChores2() {
  const [dog, kitchen, trash] = await Promise.allSettled([
    walkDog(),
    cleanKitchen(),
    takeOutTrash()
  ]);

  console.log('Dog:', dog);
  console.log('Kitchen:', kitchen);
  console.log('Trash:', trash);
}

doChores2();

// Exponentiation - operator (**)
console.log(Math.pow(2, 3));
console.log(2 ** 3);

// Trailing Commas - allows you to add a comma after the last element in an array or object.

const car = {
    make: 'BMW',
    model: 'M5 Competition',
    year: 2019,
}

const color = ['red', 'blue', 'green', 'yellow', ];

console.log(car);
console.log(color);
console.log(color.length);

// Arrays

const numbers = [7, 8, 1, 2, 3, 4, 5];
// console.log(numbers.sort()); // sort method updates the original array
console.log(' Using ToSorted Method: ', numbers.toSorted()); // toSorted method does not update the original array
console.log(' Original Array: ', numbers); // original array remains unchanged

// ToReversed Method
console.log(' Using ToReserved Method: ', numbers.toReversed()); // toReversed method does not update the original array
console.log(' Original Array: ', numbers); // original array remains unchanged

// ToSpliced Method
console.log(' Using ToSpliced Method: ', numbers.toSpliced(2, 3)); // toSpliced method does not update the original array. It removeds or add elements at the given index and returns a new array.
console.log(' Original Array: ', numbers); // original array remains unchanged

// With Method
console.log(' Using With Method: ', numbers.with(2, 99)); // with method does not update the original array. It replaces the element at the given index with the new value and returns a new array.
console.log(' Original Array: ', numbers); // original array remains unchanged

// GroupBy Method on Arrays
const peoples = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

const groupedPeople = Object.groupBy( peoples, person => person.age );
console.log(groupedPeople);
console.log(groupedPeople[20]);
console.log(groupedPeople[21]);

// Promise with Resolvers
function fetchData()
{
    const { promise, resolve, reject} = Promise.withResolvers();

    setTimeout( () => 
    {
        resolve('Manoj Manoharan')
    }, 1000);

    return promise;
}
fetchData().then( data => console.log(data) );

// Sets

const mySet = new Set([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9]);
const mySet2 = new Set([4, 5, 6, 7, 8, 9, 10, 11, 12]);

console.log(' Difference: ',mySet.difference(mySet2)); // difference method returns a new set with the elements that are in the first set but not in the second set.

console.log(' Intersection: ', mySet.intersection(mySet2)) // intersection method returns a new set with the elements that are in both sets.

console.log(' Symmetric Difference: ', mySet.symmetricDifference(mySet2)) // symmetricDifference method returns a new set with the elements that are in either set but not in both sets.

console.log( ' Union: ', mySet.union(mySet2) ) // union method returns a new set with the elements that are in either set.

console.log( ' Disjointed: ', mySet.isDisjointFrom(mySet2) ) // isDisjointFrom method returns true if the sets have no elements in common.

console.log( ' Subset: ', mySet.isSubsetOf(mySet2) ) // isSubsetOf method returns true if the first set is a subset of the second set.

console.log( ' Superset: ', mySet.isSupersetOf(mySet2) ) // isSupersetOf method returns true if the first set is a superset of the second set.


// Advanced Data Structures

// Maps

const myMap = new Map();

myMap.set(7, 'seven');
myMap.set('name', 'Manoj');

const emptyArray = [];
myMap.set(emptyArray, 'This is an empty array');

console.log(myMap.get(7));
console.log(myMap.get('name'));
console.log(myMap.get(emptyArray));

// Map Methods
const add = () => console.log(' Adding... ');
const subtract = () => console.log(' Subtracting... ');

const bandData = [
    [3, "3 Doors Down"], 
    ['three',"Three Dog Night"], 
    ['thirty', "Thirty Seconds to Mars"], 
    ['five',"Maroon 5"]
]



const bandMap = new Map(bandData);

console.log(' BAND MAP KEYS: ', bandMap.keys());
console.log(' BAND MAP VALUES: ', bandMap.values());
console.log('-----------------------------------');

console.log(' BEFORE ADDING NEW ITEMS: ', bandMap);
console.log(' BAND MAP SIZE BEFORE ADDING ITEMS: ', bandMap.size);
console.log('-----------------------------------');


bandMap.set('add','Adding Function').set('subtract','Subtracting Function');
console.log(' AFTER ADDING NEW ITEMS: ', bandMap);
console.log(' BAND MAP SIZE AFTER ADDING ITEMS: ', bandMap.size);
console.log('-----------------------------------');

bandMap.has(3);
console.log(' CHECKING FOR KEY VALUE OF 3:', bandMap.has(3));
console.log('-----------------------------------');

bandMap.delete('five');
console.log(' AFTER DELETING KEY VALUE OF 5: ', bandMap);
console.log(' BAND MAP SIZE AFTER DETLETING KEY VALUE OF 5: ', bandMap.size);
console.log('-----------------------------------');

bandMap.has(5);
console.log(' CHECKING FOR KEY VALUE OF 5 AFTER DELETING:', bandMap.has(5));
console.log('-----------------------------------');

console.log(' MY FINAL BANDMAP: ', bandMap);
console.log(' MY FINAL BANDMAP SIZE: ', bandMap.size);
console.log('-----------------------------------');

// bandMap.clear();
// console.log(' AFTER CLEARING THE BANDMAP: ', bandMap);
// console.log(' BAND MAP SIZE AFTER CLEARING: ', bandMap.size);
// console.log('-----------------------------------');

// Map Iteration
bandMap.forEach( (value, key) =>
{
    console.log(`Key: ${key} => Value: ${value}`);
})


// Sets
const bannedSets = new Set(['spam', 'scam', 'phishing']);
console.log(' BANNED SETS: ', bannedSets);

bannedSets.add('malware');
console.log(' AFTER ADDING NEW ITEM: ', bannedSets);
console.log(' BANNED SETS SIZE: ', bannedSets.size);

console.log(' CHECKING FOR SPAM IN BANNED SETS: ', bannedSets.has('spam'));

bannedSets.delete('scam');
console.log(' AFTER DELETING SCAM: ', bannedSets);


function filerSets(tag)
{
    const bannedSets = new Set(['spam', 'scam', 'phishing']);

    return tag.filter( (item) => !bannedSets.has(item) )
}

const mySets = ['hello', 'world', 'spam', 'javascript', 'scam'];
filerSets(mySets);


// Trees

class Node
{
    constructor(value, children = [])
    {
        this.value = value;
        this.children = children;
    }

    // Tree Traversal - Depth First Search

    findDFS(value)
    {
        const isValueStack = [this];
        while(isValueStack.length)
        {
            const current = isValueStack.pop();
            if(current.value === value)
            {
                return current;
            }

            for( let child of current.children)
            {
                isValueStack.push(child);
            }
        }
    }

    // Tree Traversal - Breadth First Search

    findBFS(value)
    {
        const isValueQueue = [this];
        while(isValueQueue.length)
        {
            const current = isValueQueue.shift();

            if(current.value === value)
            {
                return current;
            }

            for(let child of current.children)
            {
                isValueQueue.push(child)
            }
        }
    }
}

let sri = new Node('Sri', [new Node('Manoj')]);
let hari = new Node('Hari', [new Node('Subhi')]);

// let manoj = new Node('Manoj');
// let subhi = new Node('Subhi');

// sri.children.push(manoj);
// hari.children.push(subhi)


let htmlElement = new Node('html', [ new Node('head'), new Node('body', [ new Node('div'), new Node('li') ]) ] );


htmlElement.findBFS('li');
htmlElement.findDFS('li');


class tree
{
    constructor(value, children = [])
    {
        this.value = value;
        this.children = children;
    }
}

// Single Page Fetch
async function getCountryName(code)
{
    let page = 1;
    let target = String(code).trim().toUpperCase();

    fetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`).then( response => {
        if(!response.ok)
        {
            throw new Error('Network response was not okay!!')
        }
        return response.json()
    })
    .then(jsonData => {
        for(let c of jsonData.data)
        {
            if(c.alpha2Code === target) console.log(c.name);

            if(page >= jsonData.total_pages)
            {
                console.log('Not Found');
                return null;
            }
            page++;
        }
        return 'Not found in Page 1';
    })
    .catch(error => {
        console.log('There has been a problem with your fetch operation: ', error);
    })
}
*/

// getCountryName('af')

// Multi-page Fetch
function getName(code) {
    /**
     * First, converting the targer code into string
     * Second, converting that string into uppercase
     */
    const target = String(code).trim().toUpperCase();

    function fetchPage(page) {
        /**
         * 1. Fetching the data from the URL
         * 2. With fetch, we get a response and resolve.
         * 3. Checking if the response is okay; if okay, convert the response to json and if not throw error
         * 4. With jsonData, loop through data and check if the alpha2Code matches the target
         * 5. If matches, return and print the name
         * 6. Checking the page, if the requested code is not found in the page 1, we iterate and increate the page count
         * 7. If we had looped through every page, then print "Not Found" and return null;
         * 8. Throw error if fetchPage couldn't pull any data
         */
        return fetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not okay ${response.status}`);
                }
                return response.json()
            })
            .then(jsonData => {
                for (let c of jsonData.data) {
                    if (c.alpha2Code === target) {
                        console.log(`The Country name for the ${c.alpha2Code} is ${c.name}`);
                        return c.name;
                    }
                }

                if (page < jsonData.total_pages) {
                    return fetchPage(page + 1);
                }
                console.log(`The country name of the alpha2Code: ${target}, is not found!!`)
                return null;
            });
    }

    return fetchPage(1)
        .catch(error => {
            console.log(`There has been a problem with your fetch operation: ${error}`);
            // throw error;
        });

}

// getName('IN')

const arr = ['apple', 'fence', 'ghost', 'jackal', 'just', 'money', 'mystic', 'nerd', 'pencil', 'zebra'];

/*
// Binary Search Tree

class binarySearchTreeNode
{
    constructor(value, left = null, right = null)
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    find(value)
    {
        let current = this;

        while(current)
        {
            if(current.value === value)
            {
                return current;
            }
            else if(value < current.value)
            {
                current = current.left;
            }
            else
            {
                current = current.right;
            }
        }
    }
}

class binarySearchTree
{
    constructor( root = null )
    {
        this.root = root;
    }

    // In-Order Traversal
    traverseInOrder(node = this.root)
    {
        if(node.left)
        {
             this.traverseInOrder(node.left)
        }
        
        console.log(node.value);

        if(node.right)
        {
            this.traverseInOrder(node.right);
        }
    }

    // Pre-Order Traversal
    traversePreOrder(node = this.root)
    {
        console.log(node.value);
        if(node.left)
        {
            this.traversePreOrder(node.left);
        }
        if(node.right)
        {
            this.traversePreOrder(node.right);
        }
    }

    // Post-Order Traversal
    traversePostOrder(node = this.root)
    {
        if( node.left )
        {
            this.traversePostOrder(node.left)
        }
        if(node.right)
        {
            this.traversePostOrder(node.right)
        }

        console.log(node.value);
    }
}

const E = new binarySearchTreeNode('E');
const A = new binarySearchTreeNode('A');
const B = new binarySearchTreeNode('B');
const C = new binarySearchTreeNode('C');
const D = new binarySearchTreeNode('D');
const F = new binarySearchTreeNode('F');
const G = new binarySearchTreeNode('G');

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;


const searchTree = new binarySearchTree(E);
*/

// Hash Tables

// This hash function takes a lot of index when we work with extremely long strings
// function hash(key)
// {
//     return Array.from(key).reduce( (accumulator, char) => accumulator + char.charCodeAt(), 0 )
// }

function hash(key, arrayLength) {
    const H_PRIME = 37;

    const hash = Array.from(key).reduce((accumulator, char) => { return accumulator * H_PRIME + char.charCodeAt() }, 0)

    return hash % arrayLength;
}

class hashMap {
    constructor() {
        this._items = [];
    }

    set(k, v) {
        const hashedK = hash(k, 10)
        this._items[hashedK] = v;
    }

    get(k) {
        const hashedKey = hash(k, 10);
        return this._items[hashedKey];
    }
}

// Graphs

// Adjacency List

class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

// Friend Graph Class
class FriendGraph {
    constructor() {
        this.nodes = new Set();
    }
    addPerson(node) {
        this.nodes.add(node);
    }
    addPeople(peopleList) {
        for (let node of peopleList) {
            this.addPerson(node)
        }
    }
    setFriends(person_1, person_2) {
        person_1.adjacent.add(person_2);
        person_2.adjacent.add(person_1);
    }
    areConnectedBFS(person1, person2) //marge mow
    {
        let toVisitQueue = [person1]; //marge
        let seen = new Set(toVisitQueue); //marge

        while (toVisitQueue.length) {
            let currentPerson = toVisitQueue.shift(); //currentPerson = marge

            if (currentPerson === person2) //marge != moe
            {
                return true;
            }

            for (let neighbor of currentPerson.adjacent) // neighbor of marge is homer
            {
                if (!seen.has(neighbor)) // homer has not been seen
                {
                    toVisitQueue.push(neighbor); // so we're pushing homer to the queue
                    seen.add(neighbor); // and marking homer seen
                }
            }
        }
        return false;
    }
    areConnectedDFS(person1, person2) //homer grampa
    {
        let toVisitStack = [person1]; //[homer]
        let seen = new Set(toVisitStack); //[homer]

        while (toVisitStack.length) {
            console.log(toVisitStack.map(node => node.name))

            let currentPerson = toVisitStack.pop(); //currentPerson = homer
            console.log("DFS VISITING:", currentPerson.name) // visiting homer simpson

            if (currentPerson === person2) //homer !== grampa
            {
                return true;
            }

            for (let neighbor of currentPerson.adjacent) // neighbor of homer is [Marge, maggie, lisa]
            {
                if (!seen.has(neighbor)) // marge, maggie, and lisa has not been seen
                {
                    toVisitStack.push(neighbor); // so we're pushing [Marge, Maggie, Lisa] to the stack
                    seen.add(neighbor); // and marking lisa seen
                }
            }
        }
        return false;
    }

    areConnectedRecursive(person1, person2, seen = new Set([person1])) {
        if (person1 === person2) {
            return true;
        }

        for (let neighbor of person1.adjacent) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);

                if (this.areConnectedRecursive(neighbor, person2, seen)) {
                    return true
                }
            }
        }
        return false
    }
}

const homer = new PersonNode('Homer Simpson');
const marge = new PersonNode('Marge Simpson');
const maggie = new PersonNode('Maggie Simpson');
const lisa = new PersonNode('Lisa Simpson');
const grampa = new PersonNode('Grampa Simpson');

// homer.adjacent.add(marge);
// homer.adjacent.add(maggie);
// homer.adjacent.add(lisa);

// marge.adjacent.add(homer);
// marge.adjacent.add(maggie);

// maggie.adjacent.add(marge);
// maggie.adjacent.add(homer);
// maggie.adjacent.add(lisa);

// lisa.adjacent.add(grampa);


const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grampa])

friends.setFriends(homer, marge);
friends.setFriends(homer, maggie);
friends.setFriends(homer, lisa);

friends.setFriends(marge, maggie);

friends.setFriends(maggie, lisa);

friends.setFriends(lisa, grampa);

// BFS Graph Traversal

const moe = new PersonNode('moe');
const barney = new PersonNode('barney');
const lenny = new PersonNode('lenny');

friends.addPeople([moe, barney, lenny]);

friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

// DOM

document.addEventListener('DOMContentLoaded', function () {
    function makeBody(color) {
        document.body.style.background = color;
    }

    const btn = document.querySelector('#teal');
    btn.onclick = function () {
        makeBody('teal');
    }

    const violetButton = document.querySelector('#violet');
    violetButton.addEventListener('click', function () {
        makeBody('violet');
    })

    const submitBtn = document.querySelector('#submit');

    // submitBtn.addEventListener('click', function()
    // {
    //     console.log('I clicked a submit button!')
    // }) 
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'a') {
        console.log('You pressed A Key!');
    }
    // console.log(e.key);
})

// const removeButton = document.querySelectorAll('li button');
// const addFriendForm = document.querySelector('#addFriend');
// const input = document.querySelector('#firstName');
// const friendList = document.querySelector('#friend-list');

// for(let btns of removeButton)
// {
//     btns.addEventListener('click', function(e)
// {
//     e.target.parentElement.remove();
//     // console.log('You Clicked Remove button!')
// })
// }

// addFriendForm.addEventListener('submit', function(e)
// {

//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'Unfriend'
//     newFriend.innerText = input.value;
//     newFriend.append(removeButton);
//     input.value = '';
//     friendList.appendChild(newFriend);
// })

// Event Delegation

// const addFriendForm = document.querySelector('#addFriend');
// const input = document.querySelector('#firstName');
// const friendList = document.querySelector('#friend-list');

// friendList.addEventListener('click', function (e) {
//     if (e.target.tagName === 'BUTTON') {
//         e.target.parentElement.remove();
//     }
//     else if (e.target.tagName === 'LI') {
//         e.target.classList.add('best-friend')

//         const span = document.createElement('span');
//         span.innerHTML = '&hearts;';
//         e.target.prepend(span)
//     }

// })

// addFriendForm.addEventListener('submit', function (e) {

//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'Unfriend'
//     newFriend.innerText = input.value;
//     newFriend.append(removeButton);
//     input.value = '';
//     friendList.appendChild(newFriend);
// })

// // Local Storage

// const preferences = {
//     fontSize: '18px',
//     favColor: 'purple'
// }

// localStorage.setItem('preferences', JSON.stringify(preferences))
// JSON.parse(localStorage.getItem('preferences'))

// REST API

/**
 * Important aspects of designing REST APIs
    * Naming Convention [use nouns to represent resources]
    * Leverage logical grouping by reflecting object relationship
    * Use pluralized names for resources
    * Collection is a group of resources
    * Use hyphens for readability
    * Filtering, sorting, and pagination
    * Filter data by specific key-values
    * Fetch by using specific fields by keys
    * Limit the data to be returned /customers?limit=50
    * Paginate the data by chunk by chunk /customers?start=0&limit=50
    * Sort the data by key-value
 */

// Making Curl Request


// APIs Introduction Review

// Concept 3: Exploring web APIs using JavaScript

// axios.get("https://catfact.ninja/fact").then( (response) => {
//     console.log(response.data.fact)
// })

// axios.get("https://api.datausa.io/tesseract/cubes").then( (response) => {
//     console.log(response)
// } )

// axios.get("https://api.openf1.org/v1/drivers?driver_number=44&session_key=9158").then((response) => {
//     console.log(response.data[0].full_name);
//     console.log(response.data[0].team_name);
//     console.log(response.data[0].name_acronym);
//     console.log(response.data[0].headshot_url)
// })

const spoonacularAPIKEY = "530bcb41d8084db295d11e9d77d79162";

// axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`).then( (response) => {
//     console.log(response.data.recipes[0]);
// })

// axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cuisine=indian&diet=vegetarian`).then((response) => {

//     for (let res of response.data.results) {
//         console.log(res);
//         // console.log(`Recipe ID: ${res.id} and Recipe Name: ${res.title}`)
//     }

//     // console.log(response.data.results);
// })


// Concept 4: Putting them all together - using API key, passing in custom params

/**
 * Go to spoonacular api, get random recipe
 * Click a button and display the recipe
 * The browser needs to display it
 */

// const generateRecipeButton = document.getElementById("generate-button");

// generateRecipeButton.addEventListener('click', function () {
//     getRandomRecipe();
// });


// async function getRandomRecipe() {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
//     console.log(response);
// }



// Closures

/**
 * Closure is a features that allows inner function to access the outer scope of function.
 * It helps in binding a function to its outer scope and is created automatically whenever a function
 * is created.
 * 
 */

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }

    a = 100;
    return y;
}

var z = x();
console.log(z);
z(); //7

// Function that returns a once function

function createOnceFunction() {

    // checking if the function is called
    let hasCalled = false;

    return function () {
        // if it's not called yet, we're printing function called and changing the status of hasCalled = true
        if (!hasCalled) {
            console.log('Function called');
            hasCalled = true;
        }
        else {
            console.log('Function can only be called once...')
        }
    }
}

const callOnce = createOnceFunction();

callOnce();

callOnce();