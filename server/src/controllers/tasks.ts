import { Request, Response } from "express";

const getAllTasks = (req: Request, res: Response) => {
  res.send("all tasks");
};

module.exports = { getAllTasks };
