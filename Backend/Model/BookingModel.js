const mongoose = require('mongoose')

const bookingData = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'signup',
        required: true
    },

    name : {
        type :String
    },

    email : {
        type : String
    },

    phone: {
        type : String
    },

    resumelink : {
        type : String
    },

    services : {
        type : String
    },

    date : {
        type : String
    },

    time : {
        type : String
    }

}, {timestamps : true, versionKey : false})

module.exports = mongoose.model('booking', bookingData)