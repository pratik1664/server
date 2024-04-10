const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
        enum: ['Pizza', 'Sandwich', 'Salad'],
    },
    image: {
        type: String,
        required: true,
    }
})


const category= mongoose.model('categorySchema', categorySchema);
module.exports = category; 