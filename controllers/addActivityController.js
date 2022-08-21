const activitiesModels = require("../models/activitiesModels.js");

const getActivityById = async (req, res, next) => {
  res.send(req.activity);
};

const editActivityById = async (req, res, next) => {
  const { comment, activity_type, date, duration } = req.body;

  if (comment) req.activity.comment = comment;
  if (activity_type) req.activity.activity_type = activity_type;
  if (date) req.activity.date = date;
  if (duration) req.activity.duration = duration;

  await req.activity.save();

  res.send(req.activity);
};

module.exports = {
  getActivityById,
  editActivityById,
};