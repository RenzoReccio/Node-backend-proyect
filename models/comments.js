const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    restaurantId: { required: true, type: String },
    comment: String,
  });

const Comment = mongoose.model("Comment", commentSchema);