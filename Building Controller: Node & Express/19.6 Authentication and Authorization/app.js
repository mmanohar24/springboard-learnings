require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require("./routes/authRoutes");

const app = express();


// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection 
mongoose.connect(process.env.MONGODB_URI)
  .then((result) => app.listen(3008))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes);