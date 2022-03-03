import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name must not exceed 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", taskSchema);
