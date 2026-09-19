const mongosse = require("mongoose");
const validator = require("validator");

const userSchema = new mongosse.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            validate:
            {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be mininum of 6 characters.']
        }
    }
)


// fire a function after document saved to db
userSchema.post('save', function (doc) {
    console.log('New user was created and saved.', doc)
})

// fire a function before a document saved to db
userSchema.pre('save', function () {
    console.log('user about to created and saved.', this)
})



const User = mongosse.model('user', userSchema);

module.exports = User;