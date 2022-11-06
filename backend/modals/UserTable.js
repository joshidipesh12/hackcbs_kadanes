const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  username: {
    type: String,
    required: [true, "Please add a username"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

if (!global.UserTable) {
  global.UserTable = mongoose.model("User", userSchema);
}

module.exports = global.UserTable;
