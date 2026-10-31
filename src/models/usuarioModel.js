const db = require('../config/dbConfig');

class UsuarioModel {
    // 1. Obtener todos los usuarios junto con su rol
    getUsuarios(callback) {
        const sql = "SELECT u.id, u.nombre, u.apellido, u.cedula, u.correo, u.celular, r.nombre_rol FROM usuarios u JOIN roles r ON u.rol_id = r.id";
        db.query(sql, callback);
    }

    // 2. Obtener un usuario por su ID
    getUsuarioById(id, callback) {
        const sql = "SELECT u.id, u.nombre, u.apellido, u.cedula, u.correo, u.celular, r.nombre_rol FROM usuarios u JOIN roles r ON u.rol_id = r.id WHERE u.id = ?";
        db.query(sql, [id], callback);
    }

    // 3. Crear un usuario (POST)
    postUsuario(nombre, apellido, cedula, correo, celular, rol_id, callback) {
        const sql = "INSERT INTO usuarios (nombre, apellido, cedula, correo, celular, rol_id) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [nombre, apellido, cedula, correo, celular, rol_id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    // 4. Actualizar un usuario (PUT)
    putUsuario(id, nombre, apellido, cedula, correo, celular, rol_id, callback) {
        const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, cedula = ?, correo = ?, celular = ?, rol_id = ? WHERE id = ?";
        db.query(sql, [nombre, apellido, cedula, correo, celular, rol_id, id], callback);
    }

    // 5. Eliminar un usuario (DELETE)
    deleteUsuario(id, callback) {
        const sql = "DELETE FROM usuarios WHERE id = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = new UsuarioModel();