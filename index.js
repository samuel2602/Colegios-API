const express = require('express');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const materiaRoutes = require('./src/routes/materiaRoutes');
const rolRoutes = require('./src/routes/rolRoutes');
const matriculaRoutes = require('./src/routes/matriculaRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Rutas de la API
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/roles', rolRoutes);
app.use('/api/matriculas', matriculaRoutes);

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
});