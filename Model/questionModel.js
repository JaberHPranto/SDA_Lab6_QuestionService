import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  point: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
  },
  options: [String],
});

const Question = mongoose.model("question", questionSchema);

export default Question;
