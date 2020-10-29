const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    review:{
        type: String
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

},
{autoCreate: true}
)

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
