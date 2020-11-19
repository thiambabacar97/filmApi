const connection = require("../config/db");


class Film {

    constructor(title, description, photo) {
        this.title = title;
        this.description = description;
        this.photo = photo;
    }

    static findAll(table) {
        const sql = `SELECT * FROM ${table}`;
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
        })
    }

    static createFilm(film, table) {
        const sql = `INSERT INTO ${table} SET  title = ?, description = ?, photo = ?`
        return new Promise((resolve, reject) => {
            connection.query(sql, [film.title, film.description, film.photo], (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
        })
    }
}
module.exports = Film;