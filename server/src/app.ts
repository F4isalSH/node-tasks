import express, { Application } from "express";
import { tasksRouter } from "./routes/tasks.route";
import { connectDB } from "./database/connect";
import { errorHandler } from "./middleware/errorHandler";

require("dotenv").config();

const app: Application = express();

const port: number | string = process.env.PORT || 3000;

app.use(express.json());
//routes
app.use("/api/v1/tasks", tasksRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log("DATABASE CONNECTING...");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err: any) {
    console.log(err);
  }
};

start();
