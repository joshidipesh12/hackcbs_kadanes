require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
  let result = new Promise((resolve, reject) => {
    if (
      mongoose.connection.readyState !== mongoose.ConnectionStates.connected
    ) {
      mongoose.connect(process.env.MONGODB_URI, {}, () => {
        console.log("connected to mongodb");
        resolve();
      });
    } else {
      console.log("already connected to mongodb");
      resolve();
    }
  });
  return result;
};

module.exports = connect;
