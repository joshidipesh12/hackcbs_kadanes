require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const connectDB = require("./MongoDB");

const app = express();
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/post", postRouter);

connectDB().then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});
