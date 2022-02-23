import { Request, Response } from "express";

const getAllTasks = (req: Request, res: Response) => {
  res.send("all tasks");
};

const createTask = (req: Request, res: Response) => {
  res.send("create tasks");
};

const getTask = (req: Request, res: Response) => {
  res.send("get task");
};

const updateTask = (req: Request, res: Response) => {
  res.send("update task");
};

const deleteTasks = (req: Request, res: Response) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTasks };
