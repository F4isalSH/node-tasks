import { Router } from "express";

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTasks,
  getTask,
} from "../controllers/tasks.controller";

const router = Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);

export default router;
