require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose");

const caseStudyRoutes = require("./routes/caseStudyRoutes")

// Set up express app
const app = express();

// connect to mongodb
const dbURI = process.env.MONGO_URI
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3001);
    })
    .catch((err) => {
        console.log(`Error found: ${err}`);
    })


// Register view engine
app.set('view engine', 'ejs');

// Middleware & static files (images, CSS)
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'));


// app.use(morgan('tiny'));

// app.use((req, res, next) => {
//     console.log("new request made");
//     console.log("host:", req.hostname);
//     console.log("path:", req.path);
//     console.log("method:", req.method);

//     next();
// })


// app.use((req, res, next) => {
//     console.log("in the next middleware");
//     next();
// })




app.get('/', (req, res) => {
    // res.send('<p> Home Page </p>')
    // const caseStudies = [
    //     {
    //         title: 'PlatePost - Designing a video-first menu platform for restaurants',
    //         body: 'PlatePost put video on restaurant menus so customers could see the food before ordering.'
    //     },
    //     {
    //         title: 'Knowt: Designing a streak system that makes students come back every day',
    //         body: 'Knowt turns notes into quizzes, but users werent building a daily habit.'
    //     }
    // ]
    // res.render('index', { title: 'Home', caseStudies });

    res.redirect('/case-studies')
})

// About Route
app.get('/about', (req, res) => {
    // res.send('<p> About Page </p>')
    res.render('about', { title: 'About' });
})

// CaseStudy Routes
app.use('/case-studies', caseStudyRoutes)

// Contact Route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
})

// redirects

// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// })


// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})