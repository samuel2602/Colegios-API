const rolModel = require('../models/rolModel');

module.exports = {
    getRoles: (req, res) => {
        rolModel.getRoles((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ data: result });
        });
    },
    getRolById: (req, res) => {
        const { id } = req.params;
        rolModel.getRolById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Rol no encontrado' });
            res.status(200).json({ data: result });
        });
    },
    postRol: (req, res) => {
        const { nombre_rol, descripcion } = req.body;
        rolModel.postRol(nombre_rol, descripcion, (err, insertId) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Rol creado correctamente', data: { idInsertado: insertId } });
        });
    },
    putRol: (req, res) => {
        const { id } = req.params;
        const { nombre_rol, descripcion } = req.body;
        rolModel.putRol(id, nombre_rol, descripcion, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Rol no encontrado' });
            res.status(200).json({ message: 'Rol actualizado correctamente' });
        });
    },
    deleteRol: (req, res) => {
        const { id } = req.params;
        rolModel.deleteRol(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Rol no encontrado' });
            res.status(200).json({ message: 'Rol eliminado correctamente' });
        });
    }
};
