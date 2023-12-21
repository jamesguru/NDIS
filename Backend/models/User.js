const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    username:{type:String, require:true},
    fullname:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    phone:{type:Number, require:true},
    address:{type:String, require:true},
    gender:{type:String, require:true},
    password:{type:String, required:true},
    isAdmin:{type:String, default: false},
    isActive:{type:Boolean, default:true},
    img:{type:String},

},{timestamps:true})

module.exports = mongoose.model("User", UserSchema);
