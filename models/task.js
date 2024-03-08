const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: "mariadb", // Spécifiez le dialecte comme MariaDB
});

const Task = sequelize.define("Task", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Task;
