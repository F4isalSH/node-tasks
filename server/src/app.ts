import express, { Application, Response } from "express";

const app: Application = express();

const port: number = 3000;

const tasks = require("./routes/tasks");

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
//middleware
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);
