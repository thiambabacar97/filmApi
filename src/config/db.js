mysql = require('mysql');

let app = new class {

    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    });

    connection() {
        connection.connect(error => {
            if (error) throw error
            console.log(`database connected in ${connection.threadId}`)
        });
    }

}();

module.exports = app.connection