"use strict";

module.exports = {
	up: async (queryInterface) => {
		return queryInterface.bulkInsert("Tasks", [
			{
				title: "Faire les courses",
				description: "Acheter du lait, du pain et des œufs",
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Finir le projet",
				description: "Terminer le développement du projet API",
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			// Ajoutez d'autres tâches selon vos besoins
		]);
	},

	down: async (queryInterface) => {
		return queryInterface.bulkDelete("Tasks", null, {});
	},
};
