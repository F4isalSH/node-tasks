import express, { Application } from "express";
require("dotenv").config();

const app: Application = express();

const port: number = 3000;

const tasks = require("./routes/tasks.route");

const connectDB = require("./database/connect");

const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DATABASE CONNECTING...");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err: any) {
    console.log(err);
  }
};

start();
