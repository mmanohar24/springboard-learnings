/** Command-line tool to generate Markov text. */

const MarkovMachine = require("./markov");
const axios = require('axios');
const fs = require('fs/promises');

async function readFileContent(path) {
    try {
        return await fs.readFile(path, 'utf8')
    }
    catch (error) {
        console.error(`Error reading ${path}:`);
        console.error(` ${error}`);
        process.exit(1);
    }
}

async function readUrlContent(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching ${url}:`)
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

async function getContent(type, source) {
    switch (type) {
        case 'file':
            return readFileContent(source);
        case 'url':
            return readUrlContent(source);
        default:
            console.error(`Unknown type: ${type}`);
            console.error(`Expected "file" or "url"`);
            process.exit(1);
    }
}

async function main() {
    let type = process.argv[2];
    let source = process.argv[3];

    const text = await getContent(type, source);
    const mm = new MarkovMachine(text);
    console.log(mm.makeText())
}

main();