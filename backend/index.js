import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute";
import postRouter from "./routes/postRoute";

const app = express();
app.use(bodyParser.json());

app.use("/user", userRouter.route);
app.use("/post", postRouter.route);

app.listen(8080, () => console.log("Server started"));
