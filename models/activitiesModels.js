const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  activity_id: {
    type: String,
    required: true,
  },
  sport: {
    required: true,
    type: String,
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
  },
  sport_photo: {
    type: String,
    required: true,
  }
},
// {
//   statics: {
//     findByType: async function (type) {
//       return this.find({ type });
//     },
//   },
// }
);

const activitiesModels = new mongoose.model("activities", activitiesSchema);

module.exports = activitiesModels;
