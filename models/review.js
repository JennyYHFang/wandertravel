const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: { 
    type: String, 
    required: true },
  review: { 
    type: String, 
    required: true },
  rating: {
    type: Number,
  },
  dateposted: { 
    type: Date, 
    default: Date.now },
  tourID: {
    type: Schema.Types.ObjectId, 
    ref: 'tour'
  }
});

module.exports = mongoose.model("Review", ReviewSchema);