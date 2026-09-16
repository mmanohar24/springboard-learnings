const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {

  // Use the [fs] module to read the [index.html] file in the [./views] directory
  // set proper headers with the [res] object and send the HTML file to the client

  fs.readFile('./views/index.html', (error, data) => {
    if (error) {
      console.log(error);
      res.end;
    }
    else {

      /**
       * it can be refactored into like this:
       * res.end(data)
       * Since we're writing only one we can end with data.
      */
      res.write(data);
      res.end;
    }
  })
});



server.listen(3000, "localhost", () => {
  console.log("Listinening to requests on port: 3000");
});

