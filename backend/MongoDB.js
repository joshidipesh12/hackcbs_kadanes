const mongoose = require("mongoose");

module.exports = function connect() {
  if (mongoose.connection.readyState != 1) {
    mongoose.connect("");
  }
};
