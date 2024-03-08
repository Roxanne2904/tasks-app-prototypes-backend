require("dotenv").config();

module.exports = {
	development: {
		dialect: "mariadb",
		url: process.env.DATABASE_URL,
	},
};
