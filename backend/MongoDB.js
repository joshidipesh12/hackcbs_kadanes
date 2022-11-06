import mongoose from "mongoose";

export default function connect() {
  if (mongoose.connection.readyState != 1) {
    mongoose.connect("");
  }
}
