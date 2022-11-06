import { Router } from "express";
import UserTable from "../modals/UserTable";

const rest = Router();

rest.get("/:id", async (req, res, next) => {
  await UserTable.find({});
  next();
});

export default rest;
