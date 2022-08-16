const express = require ("express");
const router = express.Router ();
const userData = require ("../testdata.js")
const userModels = require ("../models/usersModel.js");

router.get ('/register', (req, res, next) => {
    res.json (userData);
});

router.get ('/register/:id', (req, res, next) => {
    // console.log (req.params.id);
    // console.log (req.body);
//     res.send (req.params.id);
    res.send (req.body);
});

router.post ('/register', async (req, res) => {
    console.log (req.body);
    // res.send ("test");
    const newUser = new userModels (req.body);
    const validateResult = newUser.validateSync ();
    if (validateResult) {
        return res.status (400).send (validateResult)
    }
    await newUser.save ();
    return res.send (req.body);
});

module.exports = router;