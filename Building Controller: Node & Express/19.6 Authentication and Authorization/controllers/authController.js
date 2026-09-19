const User = require("../models/User");

// handle erros
const handleErros = (err) => {
    console.log(err.message, err.code);

    let errors = {
        email: '',
        password: ''
    }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = `${err.keyValue.email} is already registered`
        return errors;
    }

    // validation erros
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}

module.exports.signup_get = (req, res) => {
    res.render("signup")
}

module.exports.login_get = (req, res) => {
    res.render("login")
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create(
            {
                email,
                password
            }
        )
        res.status(201).json(user);
    }
    catch (error) {
        const errors = handleErros(error);
        res.status(400).json({ errors })
    }
}

module.exports.login_post = async (req, res) => {

    const { email, password } = req.body;

    console.log(`The email is: ${email}`);
    console.log(`The password is: ${password}`);

    res.send("new user login")
}