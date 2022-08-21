const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  username: {
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
  }
});

const userModels = new mongoose.model("users", userSchema);

module.exports = userModels;