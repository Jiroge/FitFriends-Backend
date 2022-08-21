const express = require ("express");
const activityRoutes = express.Router ();
const activitiesModels = require ("../models/activitiesModels.js");
const activitiesController = require("../controllers/addActivityController");

activityRoutes.get ('/', async (req, res, next) => {
  const getAllActivity = await activitiesModels.find(
    {_id: "6301bf21f56ae8d57da46c24"}
    // {sport: "Running"}
    // {username: "Jibjee"}
  );
  res.send(getAllActivity.map((act) => act.toJSON()));
  console.log (getAllActivity);
});

activityRoutes.get ('/edit/:id', async (req, res, next) => {
  console.log (typeof req.params.id);
  const activity = await activitiesModels.findById (req.params.id);
  if (!activity) {
    res.status(404).end();
  }
  console.log (activity)
  res.json(activity.toJSON());
});



// activityRoutes.param ("activity_id", async (req, res, next, activity_id) => {
//   const activity = await activitiesModels.findOne({
//     activity_id: activity_id,
//   });

//   if (!activity) {
//     return res.status(404).send();
//   }

//   req.activity = activity;

//   next();
// });

// activityRoutes.get("/:activity_id", activitiesController.getActivityById);

// activityRoutes.put("/:activity_id", activitiesController.editActivityById);

module.exports = activityRoutes;