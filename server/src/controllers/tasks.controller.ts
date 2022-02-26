import { Request, Response } from "express";
const Task = require("../models/task.model");

const getAllTasks = (req: Request, res: Response) => {
  res.send("all tasks");
};

const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req: Request, res: Response) => {
  res.json({ id: req.params.id });
};

const updateTask = (req: Request, res: Response) => {
  res.send("update task");
};

const deleteTasks = (req: Request, res: Response) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTasks };
