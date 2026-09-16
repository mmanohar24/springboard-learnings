const express = require('express');

const app = express();

app.use(express.json())


const CANDIES = [
    {
        name: 'snickers', qty: 43, price: 1.50
    },
    {
        name: 'kitkat', qty: 100, price: 4.50
    }
]


app.get('/candies', (req, res) => {
    res.json(CANDIES);
})

app.post('/candies', (req, res) => {

    if (req.body.name.toLowerCase() === "circus peanuts") {
        res.status(403).json({ msg: "Horrible choice, circus peanuts forbidden" })
    }

    CANDIES.push(req.body);
    res.status(201).json(CANDIES);
})

app.listen(4001, () => {
    console.log('Server is listening on Port 4001....')
})