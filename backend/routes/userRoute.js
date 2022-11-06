const { Router } = require("express");
const UserTable = require("../modals/UserTable");

const rest = Router();

rest.get("/:id", async (req, res, next) => {
  await UserTable.find({});
  next();
});

module.exports = rest;
