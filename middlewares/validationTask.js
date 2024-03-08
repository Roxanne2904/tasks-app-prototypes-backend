const Joi = require("joi");
const errorHandlingService = require("../services/errorHandlingService");

// Schéma de validation pour la création d'une tâche
const taskSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string(),
	completed: Joi.boolean().default(false),
});

// Schéma de validation pour la mise à jour d'une tâche
const updateTaskSchema = Joi.object({
	title: Joi.string().min(1).max(255),
	description: Joi.string().max(1000),
	completed: Joi.boolean(),
});

// Service de validation des données
class ValidationService {
	// Méthode pour valider les données d'une nouvelle tâche
	async validateTask(req, res, next) {
		const { error } = await taskSchema.validate(req.body);

		if (error) return errorHandlingService.handleError(error, res);

		next();
	}
	// Méthode pour valider les données lors de la mise à jour d'une tâche
	async validateUpdateTask(req, res, next) {
		const { error } = await updateTaskSchema.validate(req.body);

		if (error) return errorHandlingService.handleError(error, res);

		next();
	}
}

module.exports = new ValidationService();
