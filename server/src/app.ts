import express, { Application, Response } from "express";

const app: Application = express();

const port: number = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

app.get("/", (req, res) => {
  res.send("ello govener");
});
