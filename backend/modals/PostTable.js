const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Please add a name"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Please add an email"],
  },
  like: {
    type: Number,
    default: 0,
  },
  comments: [{ type: String, default: [] }],
  shares: {
    type: Number,
    default: 0,
  },
});

if (!global.PostTable) {
  global.PostTable = mongoose.model("Post", postSchema);
}
module.exports = global.PostTable;
