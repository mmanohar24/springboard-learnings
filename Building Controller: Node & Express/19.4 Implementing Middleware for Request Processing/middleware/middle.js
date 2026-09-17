const sup = (req, res, next) => {
    console.log("Hello, my name is Manoj Manoharan!!");
    next();
}

const hello = (req, res, next) => {
    console.log("How you doing?");
    next();
}

module.exports = { sup, hello };