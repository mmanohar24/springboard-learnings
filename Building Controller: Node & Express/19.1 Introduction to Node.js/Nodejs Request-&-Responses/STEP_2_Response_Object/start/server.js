const http = require("http");

// This is a starter for the [NodeJS Course] - [Requests and Responses] instructional video
// Follow along and if you get stuck or have errors use the completed code in the [./finish] directory

// 1. Create a server using the [http] module

// 2. Send plain text response using the [res] object

// 3. Comment out the plain text response and send an HTML response using the [res] object

const server = http.createServer((req, res) => {
    console.log('Request is made')

    // Setting up header content type as plain text
    res.setHeader('Content-Type', 'text/plain');
    // res.write('I am a Product Designer')

    // Setting up header content type as plain html
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1> My name is Manoj </h1>')
    res.write('<p> Hello World, Manoj </p>');
    res.end();
})

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is listening for requests on PORT ${PORT}`)
})