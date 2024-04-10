const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true,
    }

})

const order = mongoose.model("orderSchema", orderSchema);
module.exports = order;