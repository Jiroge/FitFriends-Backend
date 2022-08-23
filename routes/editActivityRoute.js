const express = require("express");
// const { ObjectId } = require("mongodb");
// const activityModel = require("../models/activitiesModel");
const activityModels = require("../models/activitiesModel");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

router.get("/", async (req, res) => {
  const getAllActivity = await activityModels.find();
  res.send(getAllActivity.map((act) => act.toJSON()));
  console.log(getAllActivity);
});

router.get("/:activityId", async (req, res) => {
  console.log(req.params.activityId);
  const findActivity = await activityModels.findOne({
    _id: ObjectId(req.params.activityId)
  });
  console.log(findActivity);
  res.send(findActivity);
  
  // res.status(newFindActivity);
});

router.put ('/edit/:activityId', async (req, res) => {
  console.log(req.params.activityId);
  const editActivity = await activityModels.updateOne(
    {_id: ObjectId(req.params.activityId)},
    {$set: req.body}
  );
  res.send("already update Activity");
  console.log("already update Activity");
});

module.exports = router;
