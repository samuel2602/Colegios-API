const db = require('../config/dbConfig');

class MateriaModel {
    getMaterias(callback) {
        const sql = "SELECT * FROM materias";
        db.query(sql, callback);
    }
    getMateriaById(id, callback) {
        const sql = "SELECT * FROM materias WHERE id = ?";
        db.query(sql, [id], callback);
    }
    postMateria(nombre_materia, intensidad_horaria, callback) {
        const sql = "INSERT INTO materias (nombre_materia, intensidad_horaria) VALUES (?, ?)";
        db.query(sql, [nombre_materia, intensidad_horaria], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }
    putMateria(id, nombre_materia, intensidad_horaria, callback) {
        const sql = "UPDATE materias SET nombre_materia = ?, intensidad_horaria = ? WHERE id = ?";
        db.query(sql, [nombre_materia, intensidad_horaria, id], callback);
    }
    deleteMateria(id, callback) {
        const sql = "DELETE FROM materias WHERE id = ?";
        db.query(sql, [id], callback);
    }
}
module.exports = new MateriaModel();
