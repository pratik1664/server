const mongoose = require('mongoose');



const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    mobileno: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        required: true,
        default: "user"
    }
})

const admin = mongoose.model("adminSchema", adminSchema);