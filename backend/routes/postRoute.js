const { Router } = require("express");
const PostTable = require("../modals/PostTable");

const rest = Router();

rest.get("/:id", async (req, res, next) => {
  await PostTable.find({});
  next();
});

module.exports = rest;
