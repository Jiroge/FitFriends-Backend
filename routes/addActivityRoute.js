const express = require ("express");
const router = express.Router ();
const activitiesModels = require ("../models/activitiesModel");
ObjectId  = require("mongoose").Types.ObjectId;


router.get ('/', async (req, res) => {
  const getAllActivity = await activitiesModels.find();
  res.send(getAllActivity.map((act) => act.toJSON()));
  console.log (getAllActivity);
});

router.get ('/edit/:id', async (req, res) => {
  console.log (typeof req.params.id);
  const activity = await activitiesModels.findById (req.params.id);
  if (!activity) {
    res.status(404).end();
  }
  
  console.log (activity)
  res.json(activity.toJSON());
});

module.exports = router;