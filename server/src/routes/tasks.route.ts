import { Router } from "express";

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTasks,
  getTask,
} from "../controllers/tasks.controller";

export const tasksRouter = Router();

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);
