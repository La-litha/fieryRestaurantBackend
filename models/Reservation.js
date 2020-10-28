const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
 {
    user_id: { type :
        String
    },   
    restaurant_id: { type :
        String
    },
    guestCount:{ type:
        String 
     },
     bookingDate:{type:
         date
        },
        bookingTime:{type: String
         },
         guestName:{type:
             String },

         emailID:{type:
                String },

        phoneNumber:{type:
                    String },
        
      Instructions:{type:
         string},

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
 }
)
 





 



const Reservation = mongoose.model('Restaurant', ReservationSchema);

module.exports = Reservation;