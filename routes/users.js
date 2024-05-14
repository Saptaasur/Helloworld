const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://saptarshi:saptarshi@cluster0.icv8q2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);