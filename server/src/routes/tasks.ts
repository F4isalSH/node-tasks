import express, { Router, Request, Response } from "express";

const { getAllTasks } = require("../controllers/tasks");
const router: Router = express.Router();

router.route("/").get(getAllTasks);

module.exports = router;
