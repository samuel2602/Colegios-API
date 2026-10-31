const materiaModel = require('../models/materiaModel');

module.exports = {
    getMaterias: (req, res) => {
        materiaModel.getMaterias((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ data: result });
        });
    },
    getMateriaById: (req, res) => {
        const { id } = req.params;
        materiaModel.getMateriaById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Materia no encontrada' });
            res.status(200).json({ data: result });
        });
    },
    postMateria: (req, res) => {
        const { nombre_materia, intensidad_horaria } = req.body;
        materiaModel.postMateria(nombre_materia, intensidad_horaria, (err, insertId) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Materia creada correctamente', data: { idInsertado: insertId } });
        });
    },
    putMateria: (req, res) => {
        const { id } = req.params;
        const { nombre_materia, intensidad_horaria } = req.body;
        materiaModel.putMateria(id, nombre_materia, intensidad_horaria, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Materia no encontrada' });
            res.status(200).json({ message: 'Materia actualizada correctamente' });
        });
    },
    deleteMateria: (req, res) => {
        const { id } = req.params;
        materiaModel.deleteMateria(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Materia no encontrada' });
            res.status(200).json({ message: 'Materia eliminada correctamente' });
        });
    }
};
