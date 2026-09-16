const fs = require("fs");

// Follow along the [NodeJS Basics] instructional video //
// If any of the code is failing or you get stuck, take a look at the finished example in [./finish] directory

// 1. Using the [fs] module read the [blog1.txt] file 

// readFile is a async function
fs.readFile('./docs/blog1.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
})

console.log('The last line')



// 2. Using the [fs] module's [writeFile] method, overwrite the data in [blog1.txt] file

fs.writeFile('./docs/blog1.txt', 'Hello World, Manoj', () => {
    console.log('file was written')
})

// 3. Using the [fs] module's [writeFile] method, make a new [blog2.txt] file 

/**
 * If we try to write a file on the file that doesn't exist, the writeFile will create a new file 
 * with the name we requested and then the data will be written inside that file
 */

fs.writeFile('./docs/blog2.txt', 'Hello World, Manoj', () => {
    console.log('file2 was written')
})



// 4. Using the [fs] module's [mkdir] [rmdir] and [existsSync] methods, conditionally create and delete a directory


if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error)
        }

        console.log('Folder Created')
    })
}
else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error)
        }

        console.log('Folder deleted')
    })
}

// Deleting Files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error)
        }

        console.log('File deleted')
    })
}