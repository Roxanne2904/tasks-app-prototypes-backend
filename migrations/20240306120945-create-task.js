"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tasks", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER.UNSIGNED,
			},
			title: {
				type: Sequelize.STRING(64),
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			completed: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, _) => {
		await queryInterface.dropTable("Tasks");
	},
};
