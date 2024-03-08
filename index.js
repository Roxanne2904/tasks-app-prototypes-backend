const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); 


// Importez vos routes ici
const taskRoutes = require("./routes/index");

// Middleware pour parser les requêtes JSON
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));

// Utilisation des routes
app.use("/tasks", taskRoutes);
app.get("/", (_, res) => {
	res.send("Ma petite api de tâches");
});

// Gestion des erreurs 404 (Not Found)
app.use((req, res, next) => {
	res.status(404).send("Page not found");
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

// Démarrage du serveur
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
