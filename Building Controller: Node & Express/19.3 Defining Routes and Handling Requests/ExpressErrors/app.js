const express = require('express');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     console.log("The Server got a request");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Hello don't mind me.....");
//     next();
// })


function attemptToSave() {
    throw "Connection Error!"
}

const USERS = [
    { username: "Manoj", city: "Sunnyvale" },
    { username: "Hari", city: "Santa Clara" }
]

app.get("/users/:username", (req, res, next) => {

    try {
        const user = USERS.find(u => u.username === req.params.username);
        if (!user) throw new ExpressError("Invalid User", 404)
        return res.send({ user })
    }
    catch (error) {
        next(error);
    }
}
)

app.get("/secret", (req, res, next) => {

    try {
        if (req.query.password != "popcorn") {
            throw new ExpressError("Invalid Password", 403)
        }
        res.send("CONGRATS YOU KNOW THE PASSWORD")
    }
    catch (error) {
        next(error);
    }

})

app.get("/savetodb", (req, res, next) => {

    try {
        attemptToSave();
        res.send("SAVED TO DB")
    }
    catch (error) {
        return next(new ExpressError("Database Error"));
    }
})

app.use((req, res, next) => {
    const error = new ExpressError("Page Not Found", 404)
    next(error);
})

app.use((error, req, res, next) => {

    let status = error.status || 500;
    let message = error.msg;

    return res.status(status).json(
        {
            error: { message, status }
        }
    )
    // res.status(error.status).send(error.msg)
})

app.listen(4002, () => {
    console.log('Server running on port 4002')
})