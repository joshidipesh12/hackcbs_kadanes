const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");

const app = express();
app.use(bodyParser.json());

app.use("/user", userRouter.route);
app.use("/post", postRouter.route);

app.listen(8080, () => console.log("Server started"));
