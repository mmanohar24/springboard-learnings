require('dotenv').config();
const express = require("express");
const session = require("express-session");
const bcrypt = require('bcrypt')
const mongodbSession = require('connect-mongodb-session')(session);
const mongoose = require("mongoose");

const app = express();

const UserModal = require('./models/User');

mongoose.connect(process.env.MONGODB_URI)
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));

const store = new mongodbSession(
    {
        uri: process.env.MONGODB_URI,
        collection: 'mySessions'
    }
)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(session(
    {
        secret: 'some secret',
        resave: false,
        saveUninitialized: false,
        store: store
    }
))

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    }
    else {
        res.redirect('/login')
    }
}

app.get('/', (req, res) => {
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id)
    res.send('Welcome to session and cookie tutorial');
})

app.get('/', (req, res) => {
    res.render('landing');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModal.findOne({ email });

    if (!user) {
        return res.redirect('/login')
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.redirect('/login');
    }

    req.session.isAuth = true;

    res.redirect('/dashboard');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let user = await UserModal.findOne({ email });

    if (user) {
        return res.redirect('/register')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    user = new UserModal(
        {
            email,
            password: hashedPassword
        }
    );

    await user.save();
    res.redirect('/login')
})

app.get('/dashboard', isAuth, (req, res) => {
    res.render('dashboard')
})

app.post('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            throw error;
        }
        res.redirect('/')
    })
})

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// })