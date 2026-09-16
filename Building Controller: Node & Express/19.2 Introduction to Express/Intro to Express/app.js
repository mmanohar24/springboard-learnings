const express = require("express");

// Set up express app
const app = express();



app.get('/', (req, res) => {
    // res.send('<p> Home Page </p>')
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<p> About Page </p>')
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirects

app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404 Page
app.use((req, res) => {
    res.status(404).res.sendFile('./views/404.html', { root: __dirname })
})

// Listen for request
app.listen(3001)