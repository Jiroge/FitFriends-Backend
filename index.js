const express = require ("express");
const app = express ();
const userRouter = require ("./routes/userRoute");
const { default: mongoose } = require('mongoose');
const { json } = require("express");
const config = require ("./config") 
// const cors = require ("cors");
const PORT = 8080;

console.log (config)

// app.use(cors());
app.use (express.json ());
app.use (express.urlencoded ({extended: false}));

app.use ('/users', userRouter);

app.get ('/', (req, res) => {
  res.send ("<h1>Hello Express</h1>");
});

const start = async () => {
    // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
    await mongoose.connect ( config.mongodb.uri, {
      user: config.mongodb.username,
      pass: config.mongodb.password,
      retryWrites: true,
    }
      , { dbName: "test" }
    );
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  };
  
start();

const cors = require('cors');