const express = require('express');
const ActivityModel = require('../models/activitiesModel');
const router = express.Router();



// ส่วนเซฟ add post ลงdatabase
router.post('/', async (req, res) => {
  console.log('Body');
  console.log(req.body);
  const newActivity = await new ActivityModel(req.body);
  const validateResult = newActivity.validateSync()
  if (validateResult) {
    return res.status(400).send(validateResult);
  }
  await newActivity.save();
  res.send('test123')
  return res.status(newActivity);
});



// router.get('/', async (req, res) => {
//   const newActivity = await new ActivityModel.find();
//   console.log("hi");
//   res.send('hi');
//   res.send(newActivity.map((act) => act.toJSON()));
// });

// router.get('/:user_id', async (req, res) => {
//   console.log(req.params);
//   const newActivity = await new ActivityModel.findById(req.params.id);
//   if (!newActivity) {
//     res.status(404).end();
//   }
//   res.json(activity.toJSON());
// });




// router.patch('/activity', (req, res) => {
//   console.log('Body');
//   console.log(req.body);
//   const activity = new Activity(req.body);
//   if (validateResult) {
//     return res.status(400).send(validateResult);
//   }
//   await activity.save();
//   return res.send('update');
// });

// router.delete('/activity', (req, res) => {
//     console.log('Body');
//     console.log(req.body);
//     const activity = await Activities.findOne({
//     activity_id: activity_id,
//   });

//   res.send('delete');
// });

module.exports = router;