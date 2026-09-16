const express = require('express');
const app = express();
const itemsRoutes = require("./routes/itemsRoutes");
const ExpressError = require("./ExpressError");

app.use(express.json());
app.use("/items", itemsRoutes)

app.use((req, res, next) => {
    throw new ExpressError("Not Found", 404);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.json(
        {
            error: error.message,
        }
    )
})


module.exports = app;