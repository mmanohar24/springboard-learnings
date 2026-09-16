const http = require("http");

// This is a starter for the [NodeJS Course] - [Requests and Responses] instructional video
// Follow along and if you get stuck or have errors use the completed code in the [./finish] directory

// Create a simple server, run it with the [createServer] method from the [http] module and run it with the [listen] method 
// output the [req] object, the [res] object to the console
// note the [req.url] output, and the [req.method] output
// take a look at the [req.headers] output as well

const server = http.createServer((req, res) => {

    console.log(' ------------- REQUEST -------------')
    console.log(req);

    console.log(' ------------- REQUEST URL AND REQUEST HEADERS -------------')
    console.log(req.url, req.method, req.headers.host);

    console.log(' ------------- RESPONSE -------------')
    console.log(res);
})

const PORT = 3001;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is listening for requests on port ${PORT}`)
})