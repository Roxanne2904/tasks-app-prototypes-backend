class ValidationError extends Error {
	constructor(message, details) {
		super(message);
		this.name = "ValidationError";
		this.details = details;
		this.statusCode = 400;
	}
}

class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = "NotFoundError";
		this.statusCode = 404;
	}
}

class ErrorHandlingService {
	// Méthode pour gérer les erreurs
	handleError(err, res) {
		console.error("Error occurred:", err);
		// Renvoyer une réponse appropriée en fonction du type d'erreur
		if (err instanceof ValidationError) {
			const customError = new ValidationError(
				"Validation Error",
				err.details[0].message
			);
			res
				.status(customError.statusCode)
				.json({ message: customError.message, details: customError.details });
		} else if (err instanceof NotFoundError) {
			const customError = new NotFoundError("Not found error");

			res.status(customError.statusCode).json({
				message: customError.message,
				details: err.details[0].message,
			});
		} else {
			res.status(500).json({
				message: "Internal server error",
				details: err.details[0].message,
			});
		}
	}
}

// Exporter une instance unique de ErrorHandlingService pour être utilisée dans d'autres modules
module.exports = new ErrorHandlingService();
