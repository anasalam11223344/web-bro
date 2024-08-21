const mongoose = require("mongoose");


const UserRegistration = mongoose.Schema({
    username : {
        type:String,
        required : [true,"username is required"]
    },
    useremail : {
        type:String,
        required : [true,"useremail is required"]
    },
    userimage : {
        type:String,
        required : [true,"userimage is required"]
    },
    
    
},
{
   timestamps : true
}

)

module.exports = mongoose.model("UserRegistration",UserRegistration)