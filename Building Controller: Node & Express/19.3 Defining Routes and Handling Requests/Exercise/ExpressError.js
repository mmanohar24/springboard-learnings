class ExpressError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        // this.message = message;
        // console.error(this.stack);
    }
}

module.exports = ExpressError;