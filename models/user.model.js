const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        validate: {
            validator: function (val) { return this.password === val },
        },
        message: "password are not match",
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    email: {
        type: String,
        required: true,
    }
})


const user = mongoose.model("userSchema", userSchema);

module.exports = user;