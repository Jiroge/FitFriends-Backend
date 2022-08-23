const { default: mongoose } = require('mongoose');
const express = require ('express');
const mongodb = require('mongodb')


const activitySchema = new mongoose.Schema({
      // activity_id: {
      //   type: String,
      //   required: true,
      // },
      username: {
        type: String,
        required: true,
      },
      username_id: {
        type: String,
        required: true,
      },
      sport: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      time_start: {
        type: Date,
        required: true,
      },
      time_end: {
        type: Date, 
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      captions: {
        type: String,
        required: true,
        min: 0, 
        max: 200,
      },
      sport_photo: {
        type: String,
        required: true,
      },
    
});

const activityModel = mongoose.model('activities', activitySchema);

module.exports = activityModel;