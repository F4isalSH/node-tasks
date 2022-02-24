import { Router } from "express";

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTasks,
  getTask,
} = require("../controllers/tasks");

const router = Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
