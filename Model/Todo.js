const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  createdDate: {
    type: Date,
  },
  updatedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
