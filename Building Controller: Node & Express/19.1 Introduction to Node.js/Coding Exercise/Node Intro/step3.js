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
        const data = response.data;
        console.log(data);
    }
    catch (error) {
        console.log(`Error fetching ${url}:`)
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

async function getContent(source) {
    if (source.startsWith('http')) {
        return readUrlContent(source)
    }
    return readFileContent(source)
}

async function output(content, outPath) {
    if (!outPath) {
        console.log(content);
        return;
    }

    try {
        await fs.writeFile(outPath, content, 'utf8');
    }
    catch (error) {
        console.error(`Couldn't write ${outPath}:`);
        console.error(` ${error}`);
        process.exit(1);
    }
}

async function main() {
    let outPath = null;
    let source = process.argv[2];

    if (source === '--out') {
        output = process.argv[3];
        source = process.argv[4];
    }

    const content = await getContent(source);
    await output(content, outPath);
}

main();