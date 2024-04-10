const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    }
})