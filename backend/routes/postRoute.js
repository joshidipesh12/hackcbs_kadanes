import { Router } from "express";
import PostTable from "../modals/PostTable";

const rest = Router();

rest.get("/:id", async (req, res, next) => {
  await PostTable.find({});
  next();
});

export default rest;
