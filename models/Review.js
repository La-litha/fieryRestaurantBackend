const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({

    review:{
        String
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

})

const Review = mongoose.model('Restaurant', ReviewSchema);

module.exports = Review;
