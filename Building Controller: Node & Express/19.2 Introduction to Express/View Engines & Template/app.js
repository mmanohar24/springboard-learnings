const express = require("express");

// Set up express app

const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen for request
app.listen(3001)

app.get('/', (req, res) => {
    // res.send('<p> Home Page </p>')
    const caseStudies = [
        {
            title: 'PlatePost - Designing a video-first menu platform for restaurants',
            body: 'PlatePost put video on restaurant menus so customers could see the food before ordering.'
        },
        {
            title: 'Knowt: Designing a streak system that makes students come back every day',
            body: 'Knowt turns notes into quizzes, but users werent building a daily habit.'
        }
    ]
    res.render('index', { title: 'Home', caseStudies });
})

app.get('/about', (req, res) => {
    // res.send('<p> About Page </p>')
    res.render('about', { title: 'About' });
})

app.get('/case-studies', (req, res) => {

    const caseStudies = [
        {
            title: 'PlatePost - Designing a video-first menu platform for restaurants',
            body: 'PlatePost put video on restaurant menus so customers could see the food before ordering.'
        },
        {
            title: 'Knowt: Designing a streak system that makes students come back every day',
            body: 'Knowt turns notes into quizzes, but users werent building a daily habit.'
        }
    ]
    res.render('caseStudies', { title: 'Case Studies', caseStudies });
})

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