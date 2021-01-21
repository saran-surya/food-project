const mongoose = require('mongoose');

const userDetail = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    orgName:{
        type: String,
        required: true
    },
    empId:{
        type: String,
        requierd: true
    },
    mobileNumber:{
        type:String,
        required: true
    },
    emailId:{
        type:String,
        required: true
    },
    userImg:{
        type: String,
        required: true
    },
    regId:{
        type: Number,
        required: true
    },
    regTime:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('userDetail', userDetail)