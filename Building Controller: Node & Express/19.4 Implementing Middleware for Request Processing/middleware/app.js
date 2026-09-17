const express = require("express");
const app = express();

const { sup, how } = require("./middle")

app.use(middleware1);
app.use(middleware2);


function middleware1(req, res, next) {
    console.log('I am a middleware #1')

    req.customProperty = 100;
    next();
}

function middleware2(req, res, next) {
    console.log('I am a middleware #2')

    console.log(`The custom property value is: ${req.customProperty}`);
    req.customProperty = 600;
    next();
}

function middleware3(req, res, next) {
    console.log('I am a middleware #3')
    next();

    // const errObj = new Error("I am an error")
    // next(errObj);
}

// Error Handling Middleware
function errorHandler(error, req, res, next) {
    if (error) {
        res.send("There was an error. Please try again later!!")
    }
}

app.get("/", (req, res, next) => {
    console.log('I am a standard express function')

    console.log(`The custom property value is: ${req.customProperty}`);

    // res.send("<h1> Hello World!! </h1>")
    res.send(`The value is ${req.customProperty}`)
});


app.use(errorHandler);

app.listen(3004, error => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Server is running on port 3004")
}
);