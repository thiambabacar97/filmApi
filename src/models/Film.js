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

    static showFilm(id, table) {
        const sql = `SELECT * FROM ${table} WHERE id = ?`
        return new Promise((resolve, reject) => {
            connection.query(sql, [id], (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
        })
    }

    static deleteFilm(id, table) {
        const sql = `DELETE FROM ${table} WHERE id = ?`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [id], (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
        })
    }

    static updateFilm(film, id, table) {
        const sql = `UPDATE ${table} SET  title = ?, description = ?, photo = ?  WHERE id = ?`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [film.title, film.description, film.photo, id], (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
        })
    }
}
module.exports = Film;