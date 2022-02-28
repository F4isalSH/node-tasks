import { Request, Response } from "express";
const Task = require("../models/task.model");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
});

const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req: Request, res: Response) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: "No task with that ID" });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req: Request, res: Response) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: "No task with that ID" });
  }
  res.status(200).json({ task });
});

const deleteTasks = asyncWrapper(async (req: Request, res: Response) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: "No task with that ID" });
  }
  res.status(200).json({ task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTasks };
