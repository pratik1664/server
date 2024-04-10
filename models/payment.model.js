const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    AccountNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    pin: {
        type: Number,
        required: true,
        maxLength: 4,
        trim: true,
    }
})

const payment = mongoose.model('paymentSchema', paymentSchema);
module.exports=payment;