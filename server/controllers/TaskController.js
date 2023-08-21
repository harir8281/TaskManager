const Tasks = require("../models/TaskModel");
const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Tasks.find();
  res.json(tasks);
});

const createTask = asyncHandler(async (req, res) => {
  const { name, date, priority, description } = req.body;
  if (!name || !priority || !description) {
    res.status(404);
    throw new Error("name and priority are required");
  }
  const task = await Tasks.create({
    name,
    date,
    priority,
    description,
  });

  console.log(`task : ${task}`);
  res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  if (!task) {
    res.status(404).json("task not found");
  }
  const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  if (!task) {
    res.status(404).json("task not found");
  }
  await Tasks.deleteOne({ _id: req.params.id });
  res.status(200).json(task);
});

module.exports = { getTasks, createTask, updateTask, deleteTask };
