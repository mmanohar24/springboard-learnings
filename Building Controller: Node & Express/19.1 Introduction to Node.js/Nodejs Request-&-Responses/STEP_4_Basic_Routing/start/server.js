const http = require("http");
const fs = require('fs');


const server = http.createServer((req, res) => {

  // Basic Routing
  // Set proper headers using the [res] object
  // create a dynamic path by reading from [req.url] object with a switch statemnt
  // Use the [fs] module and the [readFile] method to read from the [./views] directory and send the proper HTML file

  let path = './views/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    }
    else {
      res.end(data);
    }
  })

});




// This starts our server //
server.listen(3000, "localhost", () => {
  console.log("Listinening to requests on port: 3000");
});

