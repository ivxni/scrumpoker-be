const express = require('express');
const app = express();
const PORT = 3001; // Verwende einen anderen Port als das React-Frontend

app.use(express.json()); // Middleware, um JSON-Anfragen zu verarbeiten

app.get('/', (req, res) => {
  res.json({ message: 'Hallo von meinem Backend!' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
