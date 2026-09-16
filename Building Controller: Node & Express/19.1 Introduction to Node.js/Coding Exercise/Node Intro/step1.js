const fs = require('fs');


// const PATH = './docs/one.txt';

function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.error(`Error reading ${path}`);
            console.error(`Error ${error}`)
        }
        else {
            console.log(data);
        }
    })
}

const path = process.argv[2];
cat(path);