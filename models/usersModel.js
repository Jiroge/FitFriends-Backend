const express = require ("express");
const { default: mongoose } = require("mongoose");
const mongodb = require ("mongodb")
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  activity_id: {
    type: String,
    required: true,
  },
  username: {
    required: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
    required: true,
  },
  weight: {
    type: Number,
    default: 0,
    required: true,
  },
  height: {
    type: Number,
    default: 0,
    required: true,
  },
  bmi: {
    type: Number,
    default: 0,
    required: true,
  },
  user_photo: {
    type: String,
    required: true,
  }
});

const userModels = new mongoose.model("users", userSchema);

module.exports = userModels;