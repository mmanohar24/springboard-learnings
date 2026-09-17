const express = require("express");
const app = express();
const cors = require("cors");

const { sup, hello } = require("./middle")


app.use(sup);
app.use(cors());

app.get("/", hello, sup, (req, res) => {
    res.send({ data: "Hey" })
})


app.listen(3005, error => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Server is running on port 3005")
}
);