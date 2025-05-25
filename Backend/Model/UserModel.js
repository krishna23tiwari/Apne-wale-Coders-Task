const mongoose = require('mongoose')

const DataSet = mongoose.Schema({
    name : {
        type : String
    },

    email:{
        type : String
    },

    password: {
        type : String
    }
}, {timestamps : true, versionKey : false})

module.exports = mongoose.model('signup', DataSet)