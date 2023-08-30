// task-management-app/routes/api.js

const express = require("express");
const router = express.Router();

// Sample data - replace this with your actual data storage mechanism
let tasks = [];

// GET all tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST a new task
router.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
