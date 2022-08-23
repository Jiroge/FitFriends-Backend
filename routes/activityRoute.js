const express = require('express');
const ActivityModel = require('../models/activitiesModel');
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/', async (req, res) => {
  const newActivity = await new ActivityModel.find();
  res.send(newActivity.map((act) => act.toJSON()));
});

router.get('/:activityId', async (req, res) => {
  console.log(req.params);
  const newActivity = await new ActivityModel.findById(req.params.id);
  if (!newActivity) {
    res.status(404).end();
  }
  res.json(activity.toJSON());
});


router.post('/activityId', async (req, res) => {
  console.log('Body');
  // console.log(req.body);
  res.send(req.body);
  const newActivity = await new ActivityModel(req.body);
  const validateResult = newActivity.validateSync ();
  if (validateResult) {
      return res.status (404).send (validateResult)
  }

  console.log(req.body);
  await newActivity.save();
  return res.send (newActivity);

  // return res.send(newActivity.toJSON());
});

// router.patch('/users/:id/activity/:id', (req, res) => {
//   console.log('Body');
//   console.log(req.body);
//   const activity = new Activity(req.body);
//   if (validateResult) {
//     return res.status(400).send(validateResult);
//   }
//   await activity.save();
//   return res.send('update');
// });

// router.delete('/:activityId', (req, res) => {
//     console.log('Body');
//     console.log(req.body);
//     const activity = await Activities.findOne({
//     activity_id: activity_id,
//   });

//   res.send('delete');
// });

module.exports = router;