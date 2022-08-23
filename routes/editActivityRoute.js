const express = require("express");
// const { ObjectId } = require("mongodb");
// const activityModel = require("../models/activitiesModel");
const activityModels = require("../models/activitiesModel");
const router = express.Router();
ObjectId = require("mongoose").Types.ObjectId;

router.get("/", async (req, res) => {
  const getAllActivity = await activityModels.find();
  res.send(getAllActivity.map((act) => act.toJSON()));
  console.log(getAllActivity);
});

router.get("/:activityId", async (req, res) => {
  console.log(req.params);
  const findActivity = await activityModels.findOne({
    _id: ObjectId(req.params.activityId),
  });
  res.send(findActivity);
  console.log(findActivity);
  const newFindActivity = {
    "_id": findActivity ._id,
    "sport": findActivity.sport,
    "date": findActivity.date,
    "time_start": findActivity.time_start,
    "time_end": findActivity.time_end,
    "location": findActivity.location,
    "captions": findActivity.captions,
    "sport_photo": findActivity.sport_photo,
  }

  // res.status(newFindActivity);
});

module.exports = router;
