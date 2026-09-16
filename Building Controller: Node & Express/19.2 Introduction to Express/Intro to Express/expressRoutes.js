const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route

/**
 * Route methods
 * app.get
 * app.post
 * app.put
 * app.patch
 * app.delete
 */

app.get('/', (req, res) => {
    res.send('HomePage')
})


app.get('/dogs', (req, res) => {
    console.log('You asked for /Dogs');
    console.log(`Request URL is ${req.url}`);
    res.send(' <h1> I Am Dog <h1>');
})

app.get('/portfolio', (req, res) => {
    res.sendFile('portfolio.html', { root: __dirname })
})


app.get('/chickens', (req, res) => {
    res.send(' BOCK BOCK BOCK ')
})

app.post('/chickens', (req, res) => {
    res.send('You created a new chicken')
})


const greetings =
{
    en: "Hello",
    fr: "bonjour",
    ic: 'hallo',
    js: 'konnichiwa'
}

app.get('/greetings/:lang', (req, res) => {

    const language = req.params.lang;
    const message = greetings[language];

    if (!message) {
        return res.send("Invalid Language!!")
    }

    return res.send(message.toUpperCase());
})

app.get('/search', (req, res) => {
    const { term, sort } = req.query;
    return res.send(`Search Pag! Term is ${term} and Sort is ${sort}`)
})

app.get('/show-me-headers', (req, res) => {
    console.log('Raw Headers: ', req.rawHeaders);
    console.log('Regular Headers: ', req.headers);
    res.send(req.headers)
})

app.get('/show-language', (req, res) => {
    const language = req.headers['accept-language'];
    res.send(`Your language preference is: ${language}`);
})

app.post('/register', (req, res) => {
    res.send(`Welcome ${req.body.username}`);
})



app.listen(4000, () => {
    console.log('Server is listening on Port 4000....')
})