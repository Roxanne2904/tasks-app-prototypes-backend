const Task = require("../models/task");
const tasksService = require("../services/tasksService");
const taskService = require("../services/tasksService");
const validationService = require("../middlewares/validationTask");
const errorHandlingService = require("../services/errorHandlingService");

// Récupérer toutes les tâches
exports.getAllTasks = async (_, res) => {
	try {
		const tasks = await taskService.getAllTasks();
		res.json(tasks);
	} catch (error) {
		errorHandlingService.handleError(error, res);
	}
};

// Récupérer une tâche par son ID
exports.getTaskById = async (req, res) => {
	try {
		const taskId = req.params.id;
		const task = await taskService.getTaskById(taskId);

		if (!task) return res.status(404).json({ message: "Task not found" });

		res.json(task);
	} catch (error) {
		errorHandlingService.handleError(error, res);
	}
};

// Créer une nouvelle tâche
exports.createTask = async (req, res) => {
	try {
		const body = req.body;
		// Créer la nouvelle tâche
		const task = await tasksService.createTask(body);

		res.status(201).json(task);
	} catch (error) {
		errorHandlingService.handleError(error, res);
	}
};

// Mettre à jour une tâche
exports.updateTask = async (req, res) => {
	try {
		const taskId = req.params.id;
		const taskBody = req.body;

		const task = await taskService.getTaskById(taskId);
		if (!task) return res.status(404).json({ message: "Task not found" });

		await taskService.updateTask(taskId, taskBody);

		res.json({ message: `Task with ID ${taskId} updated successfully` });
	} catch (error) {
		errorHandlingService.handleError(error, res);
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const taskId = req.params.id;

		// Vérifier si la tâche existe avant de la supprimer
		const existingTask = await taskService.getTaskById(taskId);
		if (!existingTask) {
			errorHandlingService.handleError(error, res);
		}

		// Appeler la méthode de service pour supprimer la tâche
		await taskService.deleteTask(taskId);

		res.json({ message: `Task with ID ${taskId} deleted successfully` });
	} catch (error) {
		errorHandlingService.handleError(error, res);
	}
};
