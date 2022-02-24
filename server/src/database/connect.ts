import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://F4isal:98DOOzBITT8QZiFL@cluster0.lje63.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url: string) => {
  mongoose.connect(connectionString);
};

module.exports = { connectDB };
