const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    }
})


const food = mongoose.model("foodSchema", foodSchema);
module.exports = food; 