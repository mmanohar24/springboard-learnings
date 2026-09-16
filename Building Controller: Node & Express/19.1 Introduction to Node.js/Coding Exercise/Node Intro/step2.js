const axios = require('axios');
const fs = require('fs');

function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.error(`Error reading ${path}:`);
            console.error(` ${error}`);
            process.exit(1);
        }
        console.log(data);
    })
}

async function webCat(url) {

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
    }
    catch (error) {
        console.log(`Error fetching ${url}:`)
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

const input = process.argv[2];

if (input.startsWith('http')) {
    webCat(input)
}
else {
    cat(input)
}