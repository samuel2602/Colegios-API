const db = require('../config/dbConfig');

class RolModel {
    getRoles(callback) {
        const sql = "SELECT * FROM roles";
        db.query(sql, callback);
    }
    getRolById(id, callback) {
        const sql = "SELECT * FROM roles WHERE id = ?";
        db.query(sql, [id], callback);
    }
    postRol(nombre_rol, descripcion, callback) {
        const sql = "INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)";
        db.query(sql, [nombre_rol, descripcion], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }
    putRol(id, nombre_rol, descripcion, callback) {
        const sql = "UPDATE roles SET nombre_rol = ?, descripcion = ? WHERE id = ?";
        db.query(sql, [nombre_rol, descripcion, id], callback);
    }
    deleteRol(id, callback) {
        const sql = "DELETE FROM roles WHERE id = ?";
        db.query(sql, [id], callback);
    }
}
module.exports = new RolModel();
