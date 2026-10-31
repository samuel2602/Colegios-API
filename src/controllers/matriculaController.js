const matriculaModel = require('../models/matriculaModel');

module.exports = {
    getMatriculas: (req, res) => {
        matriculaModel.getMatriculas((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ data: result });
        });
    },
    getMatriculaById: (req, res) => {
        const { id } = req.params;
        matriculaModel.getMatriculaById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Matrícula no encontrada' });
            res.status(200).json({ data: result });
        });
    },
    postMatricula: (req, res) => {
        const { estudiante_id, curso_id, anio_lectivo, fecha_matricula } = req.body;
        matriculaModel.postMatricula(estudiante_id, curso_id, anio_lectivo, fecha_matricula, (err, insertId) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Matrícula creada correctamente', data: { idInsertado: insertId } });
        });
    },
    putMatricula: (req, res) => {
        const { id } = req.params;
        const { estudiante_id, curso_id, anio_lectivo, fecha_matricula } = req.body;
        matriculaModel.putMatricula(id, estudiante_id, curso_id, anio_lectivo, fecha_matricula, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Matrícula no encontrada' });
            res.status(200).json({ message: 'Matrícula actualizada correctamente' });
        });
    },
    deleteMatricula: (req, res) => {
        const { id } = req.params;
        matriculaModel.deleteMatricula(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Matrícula no encontrada' });
            res.status(200).json({ message: 'Matrícula eliminada correctamente' });
        });
    }
};
