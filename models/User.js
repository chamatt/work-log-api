const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  full_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  logged_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  permission: {
    type: Number,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
