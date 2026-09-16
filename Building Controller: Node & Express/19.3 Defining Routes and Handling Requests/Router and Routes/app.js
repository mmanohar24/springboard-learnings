const express = require("express");
const app = express();
const PORT = 4000;

const things = require("./routes/things")

app.use('/things', things);

app.get('/', (req, res) => {
    res.send('Hello root');
})


//  We can chain the route by using "route"
// app.route('/things/cars')
//     .get((req, res) => {

//     })
//     .post((req, res) => {

//     });

// app.route('/things/cars/:carid')
//     .get((req, res) => {

//     })
//     .put((req, res) => {

//     })

app.listen(PORT, error => {
    if (error) {
        console.log(`Error: ${error}`)
    }
    console.log(`Listening on port ${PORT}`)
})