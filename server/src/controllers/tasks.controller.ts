import { Request, Response } from "express";
const Task = require("../models/task.model");

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error: any) {
    res.status(500).json(error);
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error: any) {
    res.status(500).json(error);
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: "No task with that ID" });
    }
    res.status(200).json({ task });
  } catch (error: any) {
    res.status(500).json(error);
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "No task with that ID" });
    }
    res.status(200).json({ task });
  } catch (error: any) {
    res.status(500).json(error);
  }
};

const deleteTasks = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: "No task with that ID" });
    }
    res.status(200).json({ task });
  } catch (error: any) {
    res.status(500).json(error);
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTasks };
