const usuarioModel = require('../models/usuarioModel');

module.exports = {
    getUsuarios: (req, res) => {
        usuarioModel.getUsuarios((err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ data: result });
        });
    },

    getUsuarioById: (req, res) => {
        const { id } = req.params;
        usuarioModel.getUsuarioById(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json({ data: result });
        });
    },

    postUsuario: (req, res) => {
        const { nombre, apellido, cedula, correo, celular, rol_id } = req.body;
        usuarioModel.postUsuario(nombre, apellido, cedula, correo, celular, rol_id, (err, insertId) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Usuario creado correctamente', data: { idInsertado: insertId } });
        });
    },

    putUsuario: (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, cedula, correo, celular, rol_id } = req.body;
        usuarioModel.putUsuario(id, nombre, apellido, cedula, correo, celular, rol_id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json({ message: 'Usuario actualizado correctamente' });
        });
    },

    deleteUsuario: (req, res) => {
        const { id } = req.params;
        usuarioModel.deleteUsuario(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        });
    }
};