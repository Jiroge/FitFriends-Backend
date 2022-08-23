const express = require ("express");
const router = express.Router ();
const userModels = require ("../models/usersModel.js");
const bcrypt = require('bcryptjs')

router.get ('/register', (req, res, next) => {
    res.send("testData")
});

router.get ('/register/:id', (req, res, next) => {
    // console.log (req.params.id);
    // console.log (req.body);
    // res.send (req.params.id);
    res.send (req.body);
});

router.post ('/register', async (req, res) => {
    // console.log (req.body);
    // res.send ("test");
    const newUser = await new userModels (req.body);
    const validateResult = newUser.validateSync ();
    if (validateResult) {
        return res.status (404).send (validateResult)
    }

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash (newUser.password, salt);

    await newUser.save ();
    console.log (newUser);
    return res.send (newUser);
});

module.exports = router;