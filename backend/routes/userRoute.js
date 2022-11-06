const { Router } = require("express");
const UserTable = require("../modals/UserTable");

const rest = Router();

rest.post("/singup", async (req, res) => {
  let exists = await UserTable.exists({
    $or: [{ username: req.body.username }, { id: req.body.id }],
  }).exec();
  if (!exists) {
    const newUser = new UserTable(req.body);
    newUser.save();
    return res.status(200).json({ message: "successfully created" });
  } else return res.status(400).json({ message: "Already Exists" });
});

rest.get("/:id", async (req, res) => {
  const user = await UserTable.findOne({ id: req.body.id });
  if (user) {
    return res.status(200).json(user);
  } else return res.status(400).json({ message: "User not found" });
});

// rest.post("/signin", async (req, res) => {
//   const user = await UserTable.findOne({ id: req.body.id });

// });

module.exports = rest;
