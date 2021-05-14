const mongoose = require("../database")

const Profile = new mongoose.Schema({
  //trim:true -> remove white spaces in the end and begin
  firstName: {
    type:String, 
    trim:true, 
    default:""
  },
  lastName: {
    type:String, 
    trim:true, 
    default:""
  },
  age: {
    type:Number, 
    default: 0
  },
  team: {
    type:String, 
    trim: true, 
    default:""
  },
  position: {
    type:String, 
    trim: true, 
    default:""
  }
})

module.exports = mongoose.model("Profile", Profile)