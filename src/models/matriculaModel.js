const db = require('../config/dbConfig');

class MatriculaModel {
    getMatriculas(callback) {
        const sql = "SELECT m.id, u.nombre AS estudiante, c.nombre_curso, m.anio_lectivo, m.fecha_matricula FROM matriculas m JOIN usuarios u ON m.estudiante_id = u.id JOIN cursos c ON m.curso_id = c.id";
        db.query(sql, callback);
    }
    getMatriculaById(id, callback) {
        const sql = "SELECT m.id, u.nombre AS estudiante, c.nombre_curso, m.anio_lectivo, m.fecha_matricula FROM matriculas m JOIN usuarios u ON m.estudiante_id = u.id JOIN cursos c ON m.curso_id = c.id WHERE m.id = ?";
        db.query(sql, [id], callback);
    }
    postMatricula(estudiante_id, curso_id, anio_lectivo, fecha_matricula, callback) {
        const sql = "INSERT INTO matriculas (estudiante_id, curso_id, anio_lectivo, fecha_matricula) VALUES (?, ?, ?, ?)";
        db.query(sql, [estudiante_id, curso_id, anio_lectivo, fecha_matricula], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }
    putMatricula(id, estudiante_id, curso_id, anio_lectivo, fecha_matricula, callback) {
        const sql = "UPDATE matriculas SET estudiante_id = ?, curso_id = ?, anio_lectivo = ?, fecha_matricula = ? WHERE id = ?";
        db.query(sql, [estudiante_id, curso_id, anio_lectivo, fecha_matricula, id], callback);
    }
    deleteMatricula(id, callback) {
        const sql = "DELETE FROM matriculas WHERE id = ?";
        db.query(sql, [id], callback);
    }
}
module.exports = new MatriculaModel();
