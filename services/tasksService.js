// Dans le fichier services/taskService.js

// Importez le modèle Task
const Task = require("../models/task");

class TaskService {
	// Méthode pour récupérer toutes les tâches
	async getAllTasks() {
		try {
			// Utilisez la méthode findAll() de Sequelize pour récupérer toutes les tâches
			const tasks = await Task.findAll();
			return tasks;
		} catch (error) {
			// Gérez les erreurs ici
			console.error("Error fetching tasks:", error);
			throw error; // Vous pouvez choisir de renvoyer l'erreur ou de la traiter différemment
		}
	}

	async getTaskById(taskId) {
		try {
			// Utilisez la méthode findByPk() de Sequelize pour récupérer une tâche par son ID
			const task = await Task.findByPk(taskId);
			if (!task) {
				throw new Error(`Task with ID ${taskId} not found`);
			}
			return task;
		} catch (error) {
			// Gérez les erreurs ici
			console.error("Error fetching task:", error);
			throw error; // Vous pouvez choisir de renvoyer l'erreur ou de la traiter différemment
		}
	}

	// Méthode pour créer une nouvelle tâche
	async createTask(taskData) {
		try {
			// Utilisez la méthode create() de Sequelize pour créer une nouvelle tâche
			const newTask = await Task.create(taskData);
			return newTask;
		} catch (error) {
			// Gérez les erreurs ici
			console.error("Error creating task:", error);
			throw error; // Vous pouvez choisir de renvoyer l'erreur ou de la traiter différemment
		}
	}

	// Méthode pour mettre à jour une tâche existante
	async updateTask(taskId, updatedData) {
		try {
			// Utilisez la méthode update() de Sequelize pour mettre à jour la tâche
			const updatedTask = await Task.update(updatedData, {
				where: { id: taskId },
				returning: true, // Renvoie le résultat mis à jour
			});
			return updatedTask;
		} catch (error) {
			// Gérez les erreurs ici
			console.error("Error updating task:", error);
			throw error; // Vous pouvez choisir de renvoyer l'erreur ou de la traiter différemment
		}
	}

	// Méthode pour supprimer une tâche
	async deleteTask(taskId) {
		try {
			// Utilisez la méthode destroy() de Sequelize pour supprimer la tâche
			const deletedTaskCount = await Task.destroy({
				where: { id: taskId },
			});
			return deletedTaskCount;
		} catch (error) {
			// Gérez les erreurs ici
			console.error("Error deleting task:", error);
			throw error; // Vous pouvez choisir de renvoyer l'erreur ou de la traiter différemment
		}
	}
}

// Exportez une instance unique de TaskService pour être utilisée dans d'autres modules
module.exports = new TaskService();
