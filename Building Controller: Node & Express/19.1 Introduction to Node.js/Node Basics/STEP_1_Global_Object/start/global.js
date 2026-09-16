// Follow along the [NodeJS Basics] instructional video //
// If any of the code is failing or you get stuck, take a look at the finished example in [./finish] directory


// Global Object

console.log(global);

setTimeout(() => {
    console.log('Inside the timeout!!')
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('My name is Manoj')
}, 1000);


/**
 * Dirname - it gives us the absolute path of the directory
 * useful when we're working with node to get the current directory of the file
 * 
 * Filenane - it gives us the absolute path of the directory along with the filename attached
 */
console.log(__dirname);
console.log(__filename);