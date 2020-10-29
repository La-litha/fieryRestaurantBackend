const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
    {
        guestCount: {
            type: String
        },
        bookingDate: {
            type: String
        },
        bookingTime: {
            type: String
        },
        guestName: {
            type: String
        },
        emailID: {
            type: String
        },
        phoneNumber: {
            type:String
        },
        Instructions: {
            type:String
        },
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {autoCreate: true}
)

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;