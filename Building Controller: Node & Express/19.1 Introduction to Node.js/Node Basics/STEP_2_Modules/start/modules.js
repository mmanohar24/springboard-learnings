// Follow along the [NodeJS Basics] instructional video //
// If any of the code is failing or you get stuck, take a look at the finished example in [./finish] directory
// 1. Add information to the [people.js] module,
// 2. Import the data here so that the current module can acces it 
// 3. use the [os] module to print out information about your local machine


const os = require("os");
console.log(os.platform(), os.homedir());

const { people, ages } = require('./people')
console.log(people);
console.log(ages)


console.log("Hello World!");