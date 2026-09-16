const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {

  // Status Codes
  // Alter the existing logic and send the proper status codes
  // 200 if the HTML file IS found 
  // 404 if the HTML files IS NOT found
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

});




// This starts our server //
server.listen(3000, "localhost", () => {
  console.log("Listinening to requests on port: 3000");
});

