const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'bodaez9b5xl8jru92hxz-mysql.services.clever-cloud.com',
    user: 'uwpjqclu81clgdmc',
    password: 'anXbE1NksHgkyKywySKe',
    database: 'bodaez9b5xl8jru92hxz',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a MySQL:", err.message);
        return;
    }
    console.log("Conexion MYSQL exitosa a Clever Cloud");
});

module.exports = db;