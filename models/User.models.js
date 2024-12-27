const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
   
  },
  name:{
    type:String,
    required: [true, "Name is required"],
  },
  certificate:{
    type: String,
    default: "Not issued yet ",
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    
  },
  course: {
    type: String,
    // required: [true, "Course is required"],
    enum: ["Web Development", "Data Science", "Cyber Security", "AI and ML"],
  },
  dp: {
    type: String, // Store the file path or cloud storage URL
    // default: "default-profile.jpg", // Optional default profile picture
  },
}, { timestamps: true });



module.exports = mongoose.model("UserAuth", UserSchema )