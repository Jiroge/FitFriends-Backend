const express = require ("express");
const app = express ();
const userRouter = require ("./routes/userRoute");
const { default: mongoose } = require('mongoose');
const { json } = require("express");

const PORT = 8080;

app.get ('/', (req, res) => {
    res.send ("<h1>Hello Express</h1>");
});

app.use (express.json ());
app.use (express.urlencoded ({extended: false}));

app.use ('/users', userRouter);

const start = async () => {
    // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
    await mongoose.connect(
      'mongodb+srv://final101:final101@cluster001.zibw8bw.mongodb.net/?retryWrites=true&w=majority'
      , { dbName: "test" }
    );
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  };
  
start();