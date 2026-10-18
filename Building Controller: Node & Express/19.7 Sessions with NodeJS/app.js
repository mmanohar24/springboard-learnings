const express = require("express");
const session = require("express-session");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 30000 },
    saveUninitialized: false
}))

// Database
const users = [
    { name: 'Manoj', age: 27 },
    { name: 'Kelvin', age: 21 },
    { name: 'Michelle', age: 22 }
];

const posts = [
    { title: 'My favorite car' },
    { title: 'My favorite fruits' }
];

app.get('/', (req, res) => {
    res.send({
        msg: 'Hello',
        users: {}
    })
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.push(user);
    res.status(201).send('Created User');
})

app.get('/users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.find(user => user.name === name);
    if (user) {
        res.status(200).send(user);
    }
    else {
        res.status(400).send('User not found')
    }
})

app.get('/post', (req, res) => {
    const { title } = req.query;
    if (title) {
        const post = posts.find(post => post.title === title);
        if (post) {
            res.status(200).send(post)
        }
        else {
            res.status(400).send('Post not found')
        }
    }
})

