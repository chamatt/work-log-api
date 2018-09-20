const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date
  },
  length: {
    type: Date,
    required: true
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories"
    }
  ],
  description: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = Activity = mongoose.model("activities", ActivitySchema);
