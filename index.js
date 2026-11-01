const express = require('express');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const materiaRoutes = require('./src/routes/materiaRoutes');
const rolRoutes = require('./src/routes/rolRoutes');
const matriculaRoutes = require('./src/routes/matriculaRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir CORS desde cualquier origen (Netlify, etc.)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

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
