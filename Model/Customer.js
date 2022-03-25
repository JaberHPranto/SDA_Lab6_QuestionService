const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String
    },
    card:{
        holderName: {
            type: String
        },
        cardNo: {
            type: String
        },
        expiryDate: {
            type: Date
        }
        
    },
    mkash: {
        name: {
            type: String
        },
        mobileNumber: {
            type: String
        }
    }
    
})

module.exports = Customer = mongoose.model('customer',CustomerSchema)