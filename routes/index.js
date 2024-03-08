const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const ValidationService = require("../middlewares/validationTask");

const { validateTask, validateUpdateTask } = ValidationService;
const { createTask, updateTask, getAllTasks, getTaskById } = taskController;

// Route pour récupérer toutes les tâches
router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", validateTask, createTask);
router.put("/:id", validateUpdateTask, updateTask);

module.exports = router;
